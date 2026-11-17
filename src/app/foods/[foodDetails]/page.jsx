import Image from "next/image";
import Link from "next/link";
import React from "react";

const foodDetails = async ({ params }) => {
  const { foodDetails } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodDetails}`,
  );
  const data = await res.json();
  const food = data.data;
  const { dish_name, image_link, category, price, message, cuisine } = food;
  return (
    <div className="max-w-md mx-auto mt-5">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image src={image_link} alt="image" width={200} height={150}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {dish_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>category : {category}</p>
          <p>
            price: <b className="text-green-400">{price}</b>
          </p>
          <p>{message}</p>
          <p>{cuisine}</p>
        </div>
      </div>
    </div>
  );
};

export default foodDetails;
