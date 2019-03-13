// The DOM element for a todo item...
TodoView = Backbone.View.extend({
  //... is a list tag.
  tagName: 'li',
  // events --> change model ---> update view
  events: {

    'click .toggle': 'toggleCompleted',
    'click .destroy': 'clear',
  },

  // The todo view listens for its changes to its model, re-rendering.
  // There is a one-to-one relationship, so we se a direct reference on the model
  initialize: function () {
    // set event listeners to the model to update view
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  // Cache the template function for a single item.
  template: Handlebars.compile($('#item-template').html()),

  // render should only update the view base on the model's changes
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    // update view on the model boolean value of 'completed'
    this.$el.toggleClass('completed', this.model.get('completed'));
    return this;
  },

  /**
  * The following functions should only be updating the model,
  * not the view
  */
  // Toggle completed state of the model
  toggleCompleted: function () {
    this.model.toggle();
  },

  // remove item from the view and destroy from collection
  clear: function () {
    this.model.destroy();
  }

});
