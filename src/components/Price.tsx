import { PRICE } from "@prisma/client";
import React from "react";

type Props = { price: PRICE | undefined };

const Price = ({ price }: Props) => {
  const renderPrince = () => {
    switch (price) {
      case PRICE.CHEAP:
        return (
          <>
            <span>$</span>
            <span className="text-gray-400">$$</span>
          </>
        );
      case PRICE.REGULAR:
        return (
          <>
            <span>$$</span>
            <span className="text-gray-400">$</span>
          </>
        );
      default:
        return <span>$$$</span>;
    }
  };

  return <p className="flex mr-3">{renderPrince()}</p>;
};

export default Price;
