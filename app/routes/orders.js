import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    const store = this.get('store');
    return store.getOrders();
  },
  store: Ember.inject.service('store')
  //store is the name of the service we are injecting
  //once it is injected, this service becomes available as the 'store' property 
});
