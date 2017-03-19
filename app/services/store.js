import Ember from 'ember';

export default Ember.Service.extend({
  getOrders(){
    return [
      { id: '6', name: 'Nate'},
      { id: '10', name: 'David' }
    ];
  }
});
