import NotFoundError from "@/components/general/NotFoundError";
import HeaderSearch from "@/components/search/HeaderSearch";
import SearchRestaurantCard from "@/components/search/SearchRestaurantCard";
import SearchSideBar from "@/components/search/SearchSideBar";
import { fetchAllCuisinesThatBelongsToRestaurant } from "@/services/cuisine.service";
import { fetchAllLocationsThatBelongsToRestaurant } from "@/services/location.service";
import { fetchSearchRestaurants } from "@/services/restaurant.service";
import { PRICE } from "@prisma/client";
import { Metadata } from "next";

type Props = {
  params: {};
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
};

export const metadata: Metadata = {
  title: "Search Restaurants",
};

const SearchPage = async ({ searchParams }: Props) => {
  const { city, cuisine, price } = searchParams;
  const [cuisines, locations, restaurants] = await Promise.all([
    fetchAllCuisinesThatBelongsToRestaurant(),
    fetchAllLocationsThatBelongsToRestaurant(),
    fetchSearchRestaurants(city, cuisine, price),
  ]);
  return (
    <>
      <HeaderSearch />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          searchParams={searchParams}
          cuisines={cuisines}
          locations={locations}
        />
        <div className="w-5/6">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <SearchRestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))
          ) : (
            <NotFoundError message="No Restaurants Found" />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
