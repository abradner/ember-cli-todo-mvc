import Ember from 'ember';

var TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function(){
      // Get the to do title set by the "New Todo" text field
      var title = this.get('newTitle');

      //Create the new To do model instance
      var todo = this.store.createRecord('todo', {
        title: title,
        isComleted: false
      });

      // Clear the "New to do" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  }
});

export default TodosController;
