import React from "react";
import items from "../../mockData/items.json";
import ItemList from "../itemList/ItemList";
import Slider from "../Slide";
import PopularProducts from "../PopularProducts";
import TopSale from "../TopSale";
import Footer from "../footer/Footer";

function HomePage() {
  return (
    <section>
      <Slider></Slider>
      {/* <PopularProducts></PopularProducts> */}
      <TopSale></TopSale>
      <ItemList items={items} />
      <Footer></Footer>
    </section>
  );
}

export default HomePage;
