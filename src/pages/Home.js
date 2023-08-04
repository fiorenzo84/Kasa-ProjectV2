import React from "react";
import Banner from "../components/Banner";
import RentalList from "../components/RentalList";
import rentalsData from "../data/data.json";
import bannerBackground from "../assets/images/banner.png";

export default function Home() {
  return (
    <main>
      <Banner image={bannerBackground} text="Chez vous, partout et ailleurs" />
      <RentalList rentals={rentalsData} />
    </main>
  );
}
