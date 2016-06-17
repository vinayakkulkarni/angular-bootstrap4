angular.module('todoApp',[])
	.controller('TodoListController',function(){
		var todoList = this;
		//Todo Listing
		todoList.todos=[
		{text:'Learn AngularJS', done:false},
		{text:'Build an Application',done:false}
		];
		//Todo Adding
		todoList.addTodo= function(){
			todoList.todos.push({text:todoList.todoText, done:false});
			todoList.todoText = '';
		};
		//Todo Remaining display
		todoList.remaining = function(){
			var count = 0;
			angular.forEach(todoList.todos,function(todo){
				count += todo.done ? 0 : 1;
			});
			return count;
		};
		//Archive Button settings
		todoList.archive = function(){
			var oldTodos=todoList.todos;
			todoList.todos = [];
			angular.forEach(oldTodos,function(todo){
				if(!todo.done) todoList.todos.push(todo);
			});
		};
	})