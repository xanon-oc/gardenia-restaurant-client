import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Gardenia | Menu</title>
      </Helmet>

      <Cover img={menuImg} title={"Our Menu"} />
      {/* Main Cover */}
      <SectionTitle subHeading={"Don't Miss"} heading={"Todays Offer"} />
      {/* Offered menu items */}
      <MenuCategory items={offered} />
      {/* Desert Menu Items */}
      <MenuCategory items={desserts} title={"Desert"} img={dessertImg} />
      {/* Pizza Menu Items */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg} />
      {/* Salads Menu Items */}
      <MenuCategory items={salad} title="Salad" img={saladImg} />
      {/* Soup Menu Items */}
      <MenuCategory items={soup} title="Soup" img={soupImg} />
    </div>
  );
};

export default Menu;
