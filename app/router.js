import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //user should see the orders template when he navigates to /orders
  //nested routes
  this.route('orders', function(){
    //the order route inherits the parents route, so the path below does NOT need to include
    //the prefix of /orders
   this.route('order', { path: '/:id'});
  });
  // ember recognizes the colon and the key names-in this case id or name and will produce a URL based on the
  // corresponding key name found in the route's model.
});

export default Router;
