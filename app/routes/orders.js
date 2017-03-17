import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      { id: '3', name: 'Nate'},
      { id: '10', name: 'David' }
    ];
  }
});
