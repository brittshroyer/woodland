import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return [
      { id: '1', name: 'Nate' },
      { id: '2', name: 'Gregg' }
    ].findBy('id', params.order_id);
    //ember take this collection and find the first item that has matching value
  }
});
