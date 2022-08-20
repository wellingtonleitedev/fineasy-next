import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transactions = await prisma.transaction.findMany();
  res.status(200).json({ transactions });
}
