import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="mb-8 featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle heading={"From our menu"} subHeading={"Check it out"} />
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nam
            atque aperiam dolorum fugit aut molestias corrupti dolorem suscipit
            labore voluptatem ratione officiis repellendus deserunt vel sit
            pariatur omnis inventore quaerat modi consequatur, eveniet iste sunt
            ipsam! Tempore ea nobis, amet corporis sapiente suscipit voluptate
            cupiditate illum id, ad quidem.
          </p>
          <button className="btn btn-outline border-0 border-b-4 rounded-lg mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
