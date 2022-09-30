const products = [
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 30.67,
    reviews: [],
  },
  {
    id: "blackcap",
    description: "Black cap",
    price: 80.47,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

function addNewProduct(id, description, price, reviews) {
  const newProduct = {
    id,
    description,
    price,
    reviews,
  };

  products.push(newProduct);

  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProductById(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };

    matchedProduct.reviews.push(newProductReview);

    return newProductReview;
  }
}
module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
