"use client";

import ProductsOnline from "@components/admin/ProductsOnline";
import ProductCard from "@components/cards/ProductCard";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-10">
      <h1 className="text-xl text-left font-bold">Online Products</h1>

      {/* product cards */}

      <div className="flex flex-col lg:flex-row gap-5 p-8 rounded-lg border-4 ">
        <ProductsOnline
          onClick={() => {}}
          title={"Plantation Shutters"}
          description={
            "quaerat cupiditate aliquid unde, quam praesentium? Quod laudantium quasi"
          }
          imageURL={
            "https://johnlewis.scene7.com/is/image/JohnLewis/shutters-Shutterly-main-block?resMode=sharp"
          }
        />

        <ProductsOnline
          onClick={() => {}}
          title={"Roller Blinds"}
          description={
            "quaerat cupiditate aliquid unde, quam praesentium? Quod laudantium quasi"
          }
          imageURL={
            "https://chronos-stores.com/wp-content/uploads/2019/02/Jet-Black-Roller-Blind.jpg"
          }
        />

        <ProductsOnline
          onClick={() => {}}
          title={"Curtains"}
          description={
            "quaerat cupiditate aliquid unde, quam praesentium? Quod laudantium quasi"
          }
          imageURL={
            "https://curtainsdirect2u.co.uk/cdn/shop/products/THERM30G-2.jpg?v=1650018238"
          }
        />
      </div>

      <Link href={"/admin-dashboard/add-products"}>
        <Button
          variant="contained"
          size="large"
          className="bg-green-500 hover:bg-green-600"
        >
          Add New Product
        </Button>
      </Link>
    </div>
  );
}
