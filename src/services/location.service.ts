import { prisma } from "./prisma";

export async function fetchAllLocationsThatBelongsToRestaurant() {
  return await prisma.location.findMany({
    where: {
      restaurants: {
        some: {},
      },
    },
    select: { id: true, name: true },
  });
}
