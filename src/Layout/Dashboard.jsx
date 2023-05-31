import { NavLink, Outlet } from "react-router-dom";
import {
  FaOpencart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaBars,
  FaShoppingBag,
  FaMailBulk,
  FaListUl,
  FaUtensils,
  FaTasks,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: Load data from server to have dynamic isAdmin based on data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-warning drawer-button lg:hidden"
        >
          <FaListUl className="" size={24} />
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054]">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome size={26} />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils size={26} />
                  Add An Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaTasks size={26} />
                  Manage Items
                </NavLink>
              </li>

              <li className="flex flex-row items-center">
                <NavLink to="/dashboard/myCart">
                  <FaBook size={26} />
                  Manage Bookings
                </NavLink>
                <div className="badge badge-secondary">
                  +{cart?.length || 0}
                </div>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers size={26} />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome size={26} />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt size={26} />
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet size={26} />
                  Payment History
                </NavLink>
              </li>
              <li className="flex flex-row items-center">
                <NavLink to="/dashboard/myCart">
                  <FaOpencart size={26} />
                  My Cart
                </NavLink>
                <div className="badge badge-secondary">
                  +{cart?.length || 0}
                </div>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome size={26} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars size={26} />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/Salad">
              <FaShoppingBag size={26} />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaMailBulk size={26} />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
