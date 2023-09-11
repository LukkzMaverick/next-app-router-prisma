import { PRICE } from "@prisma/client";
import { prisma } from "./prisma";

export interface RestaurantCardType {
  id: number;
  name: string;
  mainImage: string;
  price: PRICE;
  location: {
    name: string;
  };
  cuisine: {
    name: string;
  };
  slug: string;
}

export interface RestaurantSearchCard {
  id: number;
  name: string;
  mainImage: string;
  slug: string;
  price: PRICE;
  location: {
    id: number;
    name: string;
  };
  cuisine: {
    id: number;
    name: string;
  };
}

export async function fetchRestaurants(): Promise<RestaurantCardType[]> {
  return await prisma.restaurant.findMany({
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
    },
  });
}

export async function fetchRestaurantBySlug(slug: string) {
  return await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });
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
  return await prisma.restaurant.findMany({
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
    },
  });
}
