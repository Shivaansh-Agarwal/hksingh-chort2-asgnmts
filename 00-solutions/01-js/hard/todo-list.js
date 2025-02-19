/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list = [];
  }
  add(todo) {
    this.list.push(todo);
  }
  remove(indexOfTodo) {
    this.list = this.list.filter((todo, index) => index !== indexOfTodo);
  }
  update(indexOfTodo, updatedTodo) {
    this.list = this.list.map((todo, index) => {
      if (index === indexOfTodo) {
        return updatedTodo;
      }
      return todo;
    })
  }
  getAll() {
    return this.list;
  }
  get(indexOfTodo) {
    return this.list[indexOfTodo] ?? null;
  }
  clear() {
    this.list = [];
  }
}

module.exports = Todo;
