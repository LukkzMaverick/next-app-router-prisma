import { Cuisine, Location, PRICE, Review, User } from "@prisma/client";
import { prisma } from "./prisma";
import { notFound } from "next/navigation";

export type ArrayReviews = Array<Pick<Review, "id" | "rating">>;

export interface RestaurantCardType {
  id: number;
  name: string;
  mainImage: string;
  price: PRICE;
  location: Pick<Location, "name">;
  cuisine: Pick<Cuisine, "name">;
  slug: string;
  Review: ArrayReviews;
}

export interface RestaurantSearchCard {
  id: number;
  name: string;
  mainImage: string;
  slug: string;
  price: PRICE;
  location: Pick<Location, "name" | "id">;
  cuisine: Pick<Cuisine, "name" | "id">;
  Review: ArrayReviews;
}

export type ReviewCardType = Pick<Review, "id" | "text" | "rating"> & {
  user: Pick<User, "id" | "firstName" | "lastName">;
};

export async function fetchRestaurantsAndReviewCount(): Promise<
  Array<RestaurantCardType>
> {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      mainImage: true,
      cuisine: {
        select: { name: true },
      },
      location: {
        select: { name: true },
      },
      price: true,
      slug: true,
      Review: {
        select: {
          id: true,
          rating: true,
        },
      },
    },
  });
  return restaurants;
}

export async function fetchRestaurantBySlug(slug: string) {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      Review: {
        select: {
          id: true,
          text: true,
          user: { select: { id: true, firstName: true, lastName: true } },
          rating: true,
        },
      },
    },
  });
  if (!restaurant) return notFound();
  return restaurant;
}

export async function fetchRestaurantMenu(slug: string) {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: { Items: true },
  });
  return restaurant?.Items;
}

export async function fetchSearchRestaurants(
  city: string | undefined,
  cuisineName: string | undefined,
  price: PRICE | undefined
): Promise<RestaurantSearchCard[]> {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: { name: { equals: city, mode: "insensitive" } },
      cuisine: { name: { equals: cuisineName, mode: "insensitive" } },
      price: { equals: price },
    },
    select: {
      id: true,
      name: true,
      mainImage: true,
      price: true,
      cuisine: { select: { id: true, name: true } },
      location: { select: { id: true, name: true } },
      slug: true,
      Review: {
        select: {
          id: true,
          rating: true,
        },
      },
    },
  });

  return restaurants;
}
