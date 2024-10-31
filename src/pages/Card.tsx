import React from "react";
import pic from "../assets/image3.jpg";
import data from "../data.json";

export const Card = () => {
  return (
    <div>
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-10">
        {data.map((el: any, i: any) => (
          <div className="border rounded-lg" key={el?.id}>
            <div className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
              {el.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
