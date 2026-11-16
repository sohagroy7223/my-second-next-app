import FoodPage from "@/components/food/page";
import React from "react";

const FoodsPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  console.log(foods);
  return (
    <div>
      <h2>All food is here: {foods.length}</h2>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
        {foods.map((food) => (
          <FoodPage food={food} key={food.id}></FoodPage>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
