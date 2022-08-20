import { PrismaClient } from "@prisma/client";

const categories = {
  essentials: [
    "grocery",
    "rent",
    "utility",
    "commute",
    "health care",
    "personal care",
    "college",
    "taxes",
  ], // 55% - don't live without
  retirement: [], // 10%
  superficial: [
    "closeth",
    "gifts",
    "cinema",
    "transport",
    "junk food",
    "restaurant",
    "eletronics",
    "streaming",
    "travel",
  ], // 10% ,
  education: ["books", "course"], // 5%
  investment: [], //20%
};

const prisma = new PrismaClient();

async function load() {
  try {
    console.log("start seeding");

    prisma.category.deleteMany();
    prisma.subCategory.deleteMany();

    console.log("all categories deleted");

    Object.entries(categories).forEach(async ([key, value]) => {
      const category = await prisma.category.create({
        data: {
          title: key,
        },
      });

      console.log(`category ${category.title} created`);

      if (value?.length) {
        const subcategories = value.map((subcategory) => ({
          title: subcategory,
          categoryId: category.id,
        }));

        await prisma.subCategory.createMany({
          data: subcategories,
          skipDuplicates: true,
        });

        console.log(`${subcategories.length} subcategories created`);
      }

      console.log("seeding finished");
    });
  } catch (error) {
    console.error({ error });
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

load();
