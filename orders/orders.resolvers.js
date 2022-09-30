const { getAllOrders } = require("./orders.model");
module.exports = {
  Query: {
    products: (parent, args, ctx) => {
      return getALlOrders();
    },
  },
};
