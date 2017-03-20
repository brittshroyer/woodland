import Ember from 'ember';
//import models below using absolute paths
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
  Product.create({title: 'Tent', price: 100, description: 'Easily assembled. Comfortably sleeps 4 adults or 8 dwarfs.'}),
  Product.create({title: 'Sleeping Bag', price: 45, description: '18 ducks were murdered and skinned so you could remain toasty inside of this bag.'}),
  Product.create({title: 'Flashlight', price: 12, description: 'The night is dark and full of terrors. Use this to brighten your night or beat your enemies.'}),
  Product.create({title: 'First-Aid Kit', price: 16, description: 'Buy this if you are a total pussy.'})
];
const orders = [
  Order.create({id: '0001', name: 'Tywin Lannister',
    items: [
      LineItem.create({product: products[0], quantity: 1}),
      LineItem.create({product: products[1], quantity: 4}),
      LineItem.create({product: products[2], quantity: 2}),
      LineItem.create({product: products[3], quantity: 1})
    ]
  }),
  Order.create({id: '0002', name: 'Daenerys Targaryen',
    items: [
      LineItem.create({product: products[0], quantity: 50}),
      LineItem.create({product: products[1], quantity: 200}),
      LineItem.create({product: products[2], quantity: 100}),
      LineItem.create({product: products[3], quantity: 0})
    ]
  }),
  Order.create({id: '0003', name: 'Robert Borathean',
    items: [
      LineItem.create({product: products[0], quantity: 20}),
      LineItem.create({product: products[1], quantity: 30}),
      LineItem.create({product: products[2], quantity: 0}),
      LineItem.create({product: products[3], quantity: 5})
    ]
  }),
];
export default Ember.Service.extend({
  getOrderById(id){
    return orders.findBy('id', id);
  },
  getOrders(){
    return orders;
  },
  getProducts(){
    return products;
  }
});
