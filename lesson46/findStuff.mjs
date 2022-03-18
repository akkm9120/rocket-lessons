import db from './models/index.mjs';

const getStuff = async () => {
  try {
    const category = await db.Category.findOne({
      where: {
        name: [process.argv[2]],
      },
      attributes: ['name'],
      include: [db.Item],
    });
    console.log(category);

    const categories = await db.sequelize.query('SELECT * FROM categories');
    console.log(stuff);
    // const categoryItems = await category.getItems();
    // console.log(categoryItems.map((categoryItem) => categoryItem.name));
  } catch (error) {
    console.log(error);
  }
};

getStuff();

// const getDrummers = (request, response) => {
//   const drummers = await db.Drummer.findAll();

//   response.render('drummers/index', { drummers });
// };

const getDrummerById = (request, response) => {
  const drummerById = await db.Drummer.findAll();
  const responseObj = {
    drummerById: drummerById
  }

  response.render('drummers/show', responseObj);
};