import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleMakeAdmin = (id) => {
    toast((t) => (
      <span className="flex gap-4 items-center justify-center">
        Please Confirm ! To Delete Product From Cart ?
        <button
          className="btn btn-warning btn-sm bg-red-500 text-white"
          onClick={() => {
            fetch(`http://localhost:5000/users/admin/${id}`, {
              method: "PATCH",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.modifiedCount > 0) {
                  refetch();
                  toast.success("Confirm to set this person as a admin  !");
                }
              });
            toast.dismiss(t.id);
          }}
        >
          CONFIRM
        </button>
      </span>
    ));
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h2 className="text-2xl font-semibold my-4">
        Total Users : {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-outline w-14 h-14  hover:bg-green-500 hover:border-none"
                    >
                      <FaUserShield size={24} />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-outline w-14 h-14  hover:bg-red-500 hover:border-none"
                  >
                    <FaRegTrashAlt size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
