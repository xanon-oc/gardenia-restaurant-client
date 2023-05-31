import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
const img_hosting_token = import.meta.env.VITE_IMGBB;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imageURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imageURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new Data", data.data);
            if (data.data.insertedId) {
              alert("Item added successfully");
            }
          });
        }
      });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SectionTitle subHeading={"Whats New"} heading={"Add an item"} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full  rounded-lg"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              defaultValue="Pick one"
              {...register("category", { required: true })}
              className="select select-bordered rounded-lg"
            >
              <option disabled>Pick one</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full max-w-xs rounded-lg"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 rounded-lg"
            placeholder="Details about the recipe..."
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Item image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered   rounded-lg"
          />
        </div>
        <input
          className="btn rounded-lg w-full"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
