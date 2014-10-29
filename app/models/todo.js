import DS from 'ember-data';

var Todo = DS.Model.extend({
   title: DS.attr('string'),
   isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "Complete Tutorial",
            isCompleted: false
        },
        {
            id: 2,
            title: "Check out more stuff",
            isCompleted: true
        },
        {
            id: 3,
            title: "Profit!!!",
            isCompleted: false
        }
    ]
});

export default Todo;