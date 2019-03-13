var TodoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the 'completed' state of this todo item
  toggle: function () {
    this.set('completed', !this.get('completed'));
  }
});