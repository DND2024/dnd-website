import React from "react";

function CardVideo() {
  return (
    <div className="card my-10 md:w-2/6 md:mx-[4%] p-[6%] md:p-[2%] rounded-[40px] bg-[#979797] ">
      <img
        className="card-img-top rounded-[30px] "
        src="https://www.visionvivaah.com/blog/wp-content/uploads/2019/12/Event-Organisers-For-Dance-Parties-1024x514.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title py-2 font-semibold ">Music Night</h5>
        <p className="card-text font-extralight">
          Some quick example text to build on the card title and make up the
        </p>
      </div>
    </div>
  );
}

export default CardVideo;
