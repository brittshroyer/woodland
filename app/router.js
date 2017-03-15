import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route(
    //user should see the orders template when he navigates to /orders
    'orders',
    {Path: '/orders' }
  );
    //below is shorthand we can use if path matches the name of the template
  // this.route('orders');
});

export default Router;
