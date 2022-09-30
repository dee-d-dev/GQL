const orders = [
  {
    date: "07-06-2020",
    subtotal: 111.14,
    items: [
      {
        product: {
          id: "blackcap",
          description: "Black cap",
          price: 80.47,
        },
        quantity: 5,
      },
      {
        product: {
          id: "bluejean",
          description: "Blue Jeans",
          price: 30.67,
        },
        quantity: 7,
      },
    ],
  },
];

function getAllOrders(orders) {
  return orders;
}

module.exports = { getAllOrders };
