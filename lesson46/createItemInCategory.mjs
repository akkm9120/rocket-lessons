import db from './models/index.mjs';

const createItemInCategory = async () => {
  try {
    const category = await db.Category.findOne({
      where: {
        name: process.argv[2],
      },
    });

    if (!category) {
        throw new Error(`Could not find category ${process.argv[2]}`);
    }

    // create an item record AND a join table record
    const item = await category.createItem({
      name: process.argv[3],
    });

    console.log(item);

  } catch (error) {
    console.log(error);
  }
  db.sequelize.close();
};

createItemInCategory();