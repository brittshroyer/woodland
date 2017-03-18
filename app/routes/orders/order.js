import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return [
      { id: '6', name: 'geafe' },
      { id: '98', name: 'dana' },
      { id: '10', name: 'loser' }
    ].findBy('id', params.id);
    //findBy(property, value)
    // ember take this collection and find the first item that has matching value
  }
});
