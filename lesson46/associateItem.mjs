import db from './models/index.mjs';

const createAssoc = async () => {
  try {
    const category = await db.Category.findOne({
      where: {
        name: process.argv[2],
      },
    });

    const item = await db.Item.findOne({
      where: {
        name: process.argv[3],
      },
    });

    // create the row in the join table
    const result = await category.addItem(item);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  db.sequelize.close();
};

createAssoc();