// ----- spelling error
// ----- call it sth like itemButton maybe?
const button = document.querySelector('.buton-item');

// ---- are these comments redundant?
// item button click event listener
button.addEventListener('click', async () => {
  // get name variable from input
  const name = document.querySelector('.item-name').value;
  // get quantity from quantity input
  const quantity = document.querySelector('.item-quantity').value;

  // post request to add item to database
  // ----- use object shorthand
  axios.post('/api/items', { name: name, quantity: quantity });

  // create modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  // create header
  const header = document.createElement('h1');
  header.textContent = 'Success!!!!';
  // create button
  const button = document.createElement('button');
  button.classList.add('modal-button');
  // button click event
  button.addEventListener('click', () => {
      // set display to none on click
    modal.style.display = 'none';
  });

  const body = document.querySelector('body');
  // append header to modal
  modal.appendChild(header);
  // append button to modal
  modal.appendChild(button);
  // append modal to body
  body.appendChild(modal);
});

// ---- better variable naming
const ctgbtn = document.querySelector('.btn-ctg');

ctgbtn.addEventListener('click', () => {
  const ctgName = document.querySelector('.ctg-name').value;
  // ---- define function to make post request
  axios.post('/api/categories', { name: ctgName });

  // ---- define a function to create a modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const header = document.createElement('h1');
  header.textContent = 'Success!!!!';
  const button = document.createElement('button');
  button.classList.add('modal-button');
  button.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const body = document.querySelector('body');
  modal.appendChild(header);
  modal.appendChild(button);
  body.appendChild(modal);
});

const postRequest = (url, data) => {
  axios.post(url, data);
}