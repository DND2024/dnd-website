import React from "react";

function CardLatestBuzz() {
  return (
    <div className="card my-10 md:w-2/6 md:mx-[4%] p-[6%] md:p-[2%] rounded-2xl bg-[#B9BCA4] dark:bg-[#27231B] ">
      <img
        className="card-img-top rounded-2xl"
        src="https://www.visionvivaah.com/blog/wp-content/uploads/2019/12/Event-Organisers-For-Dance-Parties-1024x514.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title py-3 font-extrabold text-xl ">Music Night</h5>
        <p className="card-text font-light ">
          Some quick example text to build on the card title and make up the
        </p>
      </div>
    </div>
  );
}

export default CardLatestBuzz;
