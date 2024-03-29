let productHTML = '';

products.forEach((product) => {
  productHTML += `
    <div class="product-container">

      <div class="product-image-container">
        <img class="product-img"
          src="${product.image}" alt="backpack" >
      </div>

      <div class="product-name">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents/100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <button class="add-to-cart-button button-primary js-addCart"
        data-product-id="${product.id}">
        Add to Cart
      </button>
    
    </div>
  `
})

// console.log(productHTML);

document.querySelector('.js-product-grid').innerHTML = productHTML;

document.querySelectorAll('.js-addCart')
  .forEach((button) => {
    button.addEventListener('click', () => {

      //console.log("product added");
      // console.log(button.dataset);
      console.log(button.dataset.productId);

      const productId = button.dataset.productId;

      let matchingItem;

      cart.forEach((item) => {   //item will contain a productName and quantity
        if(productId === item.productId){
          matchingItem = item;
        }
      })

      if(matchingItem){
        matchingItem.quantity++;
      }else{
        cart.push({
          productId: productId,
          quantity: 1
        });
      }
      console.log(cart);
    });
  });

