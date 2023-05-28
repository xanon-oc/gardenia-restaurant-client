import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (_id) => {
    console.log(_id);
    toast((t) => (
      <span className="flex gap-4 items-center justify-center">
        Please Confirm ! To Delete Product From Cart ?
        <button
          className="btn btn-warning btn-sm bg-red-500 text-white"
          onClick={() => {
            fetch(`http://localhost:5000/carts/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  refetch();
                  toast.success("Product Delete Successful !");
                }
              });
            toast.dismiss(t.id);
          }}
        >
          Delete
        </button>
      </span>
    ));
  };
  return (
    <div>
      <Helmet>
        <title>Gardenia | Cart</title>
      </Helmet>
      <div className="uppercase font-bold flex justify-evenly items-center gap-4">
        <h3 className="text-3xl">Total Items : {cart.length}</h3>
        <h3 className="text-3xl">Total Price : ${total}</h3>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>

              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row, index) => (
              <tr key={row._id}>
                <th>
                  <button className="btn btn-ghost btn-xs">{index + 1}</button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={row.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{row.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>

                <td> ${row.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(row._id)}
                    className="btn btn-outline h-15 w-12 hover:bg-red-500 hover:border-none"
                  >
                    <FaRegTrashAlt size={24} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
