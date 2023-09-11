import NotFoundError from "@/components/general/NotFoundError";
import RestaurantHeader from "@/components/restaurant/RestaurantHeader";
import RestaurantNavbar from "@/components/restaurant/RestaurantNavbar";
import Menu from "@/components/restaurant/menu/Menu";
import { fetchRestaurantMenu } from "@/services/restaurant.service";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export const metadata: Metadata = {
  title: "Restaurant Menu",
};

const MenuPage = async ({ params: { slug } }: Props) => {
  const restaurantMenu = await fetchRestaurantMenu(slug);
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavbar slug={slug} />
      {restaurantMenu ? (
        <Menu menu={restaurantMenu} />
      ) : (
        <NotFoundError message="No Menu Found" />
      )}
    </div>
  );
};

export default MenuPage;
