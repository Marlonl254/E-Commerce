// Fetch the product data from the JSON file
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.querySelector('.product-items');

    // Iterate over the product data and generate HTML for each product
    data.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');

      const imageElement = document.createElement('img');
      imageElement.src = product.image;

      const titleElement = document.createElement('h3');
      titleElement.textContent = product.title;

      const priceElement = document.createElement('p');
      priceElement.textContent = '$' + product.price;

      productItem.appendChild(imageElement);
      productItem.appendChild(titleElement);
      productItem.appendChild(priceElement);

      productContainer.appendChild(productItem);
    });
  });
// Fetch the product data from the JSON file
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.querySelector('.product-items');

    // Iterate over the product data and generate HTML for each product
    data.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');

      const imageElement = document.createElement('img');
      imageElement.src = product.image;

      const titleElement = document.createElement('h3');
      titleElement.textContent = product.title;

      const priceElement = document.createElement('p');
      priceElement.textContent = '$' + product.price;

      productItem.appendChild(imageElement);
      productItem.appendChild(titleElement);
      productItem.appendChild(priceElement);

      productContainer.appendChild(productItem);
    });
  });

/*/ Fetch the product data from the JSON file
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    // Get the product items container
    const productContainer = document.getElementById('product-items');

    // Iterate over the product data and generate HTML for each product
    data.forEach(product => {
      // Create a div element to represent each product item
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');

      // Create an image element for the product image
      const imageElement = document.createElement('img');
      imageElement.src = product.image;

      // Create a heading element for the product title
      const titleElement = document.createElement('h3');
      titleElement.textContent = product.title;

      // Create a paragraph element for the product price
      const priceElement = document.createElement('p');
      priceElement.textContent = '$' + product.price;

      // Append the image, title, and price elements to the product item
      productItem.appendChild(imageElement);
      productItem.appendChild(titleElement);
      productItem.appendChild(priceElement);

      // Append the product item to the product container
      productContainer.appendChild(productItem);
    });
  });*/

