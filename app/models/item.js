import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  details: DS.attr(),
  price: DS.attr()
});