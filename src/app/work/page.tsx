import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Meet from "@/components/Meetmembers/Meet";
import TalkToUs from "@/components/TalkToUs/TalkToUs";
import React from "react";

function page() {
  return (
        <>
        <TalkToUs/>
        <Meet/>
        <Footer/>
        </>
   
  );
}

export default page;
