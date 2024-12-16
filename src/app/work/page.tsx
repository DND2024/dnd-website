import Footer from "@/components/Footer/Footer";
import Meet from "@/components/Meetmembers/Meet";
import TalkToUs from "@/components/TalkToUs/TalkToUs";
import React from "react";

function page() {
  return (
    <div>
      <TalkToUs/>
      <Meet/>
      <Footer/>
    </div>
  );
}

export default page;
