import React, { useState } from "react";
import orderCover from "../../../assets/order/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../../../components/FoodCard/FoodCard";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["Salad", "Pizza", "Soup", "Dessert", "Drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Gardenia | Order Food</title>
      </Helmet>
      <Cover img={orderCover} title={"Order Food"} />
      <Tabs
        className="mt-8 mb-8"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="underline-none uppercase flex justify-center gap-8 mb-8">
          <Tab className="tab tab-bordered">Salad</Tab>
          <Tab className="tab tab-bordered">Pizza</Tab>
          <Tab className="tab tab-bordered">Soups</Tab>
          <Tab className="tab tab-bordered">Dessert</Tab>
          <Tab className="tab tab-bordered">Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
