// express server
const express = require('express');
const initItemModel = require('./models/item');
const initCtgoryModel = require('./models/category');
const initUserModel = require('./models/user');
const { response } = require('express');
const app = express();

const port = 3000;

const Item = initItemModel();
// --- change to Category
const Ctgory = initCtgoryModel();
const User = initUserModel();

// ---- put underscore (_req) before unused params
app.get('/items', (req, res) => {
  // ---- sequelize queries return promises, we need async await
  // ---- no error handling
  // ---- what is result? items?
  const result = Item.findAll();
  // ---- no wild console logs
  console.log('#######', result);

  // ---- we shouldnt use lazy loading here, but eager loading instead
  for (let i = 0; i < result.length; i++) {
    result[i].Categories = result.getCategories();
  }

  res.json(result);
});

// ---- naming is a bit odd, maybe call it getCategoriesByName
const requestNameCategories = (req, res) => {
  const name = req.params.name;
  // ---- remove console logs
  console.log(name);
  console.log('getting categories');
  // ---- dont use abbreviations please
  // ---- no error handling
  // ---- async await
  // ---- im getting categories by name, but you are looking for the id?
  const ctgory = Ctgory.findAll({ where: { id: name } });
  console.log('finished getting categories');
  console.log(ctgory);
  // ---- response during development?
  res.send('hellooooooooooooooooooooooooooooooooo');
};

app.get('/categories/:name', requestNameCategories);

app.post('/items', (req, res) => {
  const item = req.body.data;

  // no error handling, async await
  const dbItem = Item.create(item);

  // --- response is not a variable in this function
  response.send('success!');
});

const updateItem = (req, res) => {
  const user = req.user;

  if (!user) res.send('Something went wrong');

  const user2 = User.findOne({ where: { id: user.id } });
  if (!user2) res.send('Something went wrong');

  // itemId? req.params.id?
  const id = req.item.id;

  const items = Item.findAll({ where: { id: id } }); // Item[] || []

  if (items.length > 0) {
    const item = items[0];

    const item2 = item.update(req.body.data);

    if (item2) {
      res.send('success');
    }
  }
};

app.put('/items/:id', updateItem);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
