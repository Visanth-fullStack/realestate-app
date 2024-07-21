import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import { useNavigate } from "react-router-dom";
import PropertySlider from "../components/PropertySlider/PropertySlider";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/properties");
  };

  const property = Array(6).fill({
    community: "CommunityA",
    building: "BuildingA",
    unitNo: "unit 107",
  });
  return (
    <div>
      <Header />
      <Navbar/>
      <Banner/>
      <PropertySlider properties={property}/>
    </div>
  );
};

export default Home;
