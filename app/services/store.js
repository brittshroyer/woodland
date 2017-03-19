import Ember from 'ember';

export default Ember.Service.extend({
  getOrderById(id){
    const orders = this.getOrders();
    return orders.findBy('id', id);
  },
  getOrders(){
    return [
      { id: '6', name: 'Nate'},
      { id: '10', name: 'David' }
    ];
  }
});
