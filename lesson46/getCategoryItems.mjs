import db from './models/index.mjs';

const getCategorysItems = async () => {
  try {
    const category = await db.Category.findOne({
      where: {
        name: [process.argv[2]],
      },
    });
    const categoryItems = await category.getItems();
    console.log(categoryItems.map((categoryItem) => categoryItem.name));
  } catch (error) {
    console.log(error);
  }
};

getCategorysItems();