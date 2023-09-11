import RestaurantHeader from "@/components/restaurant/RestaurantHeader";
import React from "react";

const RestaurantLayout = ({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <>
      <RestaurantHeader slug={slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
};

export default RestaurantLayout;
