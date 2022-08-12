import React from "react";
import Banner from "../components/Banner/Banner";
import ExtraInformation from "../components/ExtraInformation/ExtraInformation";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import OurShop from "../components/OurShop/OurShop";
import Prueba from "../components/Prueba";
import Reviews from "../components/ReviewsComp/Reviews";


function Welcome() {
  return (
    <>
      <Header />
      <Banner />
      <ExtraInformation />
      <OurShop />
      <Reviews />
      <Footer />
    </>
  )
}

export default Welcome;