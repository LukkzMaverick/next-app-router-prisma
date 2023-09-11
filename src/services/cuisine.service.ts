import { prisma } from "./prisma";

export async function fetchAllCuisinesThatBelongsToRestaurant() {
  return await prisma.cuisine.findMany({
    where: {
      restaurants: {
        some: {},
      },
    },
    select: { id: true, name: true },
  });
}
