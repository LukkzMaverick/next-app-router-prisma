import { PRICE } from "@prisma/client";
import Link from "next/link";

type Props = {
  cuisines: { id: number; name: string }[];
  locations: { id: number; name: string }[];
  searchParams: { city?: string; cuisine?: string; price?: string };
};
const SearchSideBar = async ({ locations, cuisines, searchParams }: Props) => {
  console.log(searchParams);
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, city: location.name },
            }}
            className="flex flex-col w-fit"
          >
            <span key={location.id} className="font-light text-reg capitalize">
              {location.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, cuisine: cuisine.name },
            }}
            className="flex flex-col w-fit"
          >
            <span key={cuisine.id} className="font-light text-reg capitalize">
              {cuisine.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <Link
            className="border w-full text-reg font-light rounded-l p-2 flex justify-center"
            href={{
              pathname: "/search",
              query: { ...searchParams, price: PRICE.CHEAP },
            }}
          >
            $
          </Link>
          <Link
            className="border w-full text-reg font-light rounded-l p-2 flex justify-center"
            href={{
              pathname: "/search",
              query: { ...searchParams, price: PRICE.REGULAR },
            }}
          >
            $$
          </Link>
          <Link
            className="border w-full text-reg font-light rounded-l p-2 flex justify-center"
            href={{
              pathname: "/search",
              query: { ...searchParams, price: PRICE.EXPENSIVE },
            }}
          >
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
