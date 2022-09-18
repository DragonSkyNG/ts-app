class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = todoText+"key";
  }
}

export default Todo;
