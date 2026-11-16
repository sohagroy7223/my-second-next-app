import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodPage = ({ food }) => {
  const { dish_name, image_link, id } = food;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image src={image_link} alt="image" width={200} height={150}></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <Link href={`foods/${id}`} className="btn btn-primary">
          view details
        </Link>
      </div>
    </div>
  );
};

export default FoodPage;
