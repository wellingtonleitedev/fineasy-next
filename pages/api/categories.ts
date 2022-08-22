import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/root/lib/prisma";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const categories = await prisma.category.findMany({
    include: {
      subCategories: true,
    },
  });

  return response.status(200).json({ categories });
}
