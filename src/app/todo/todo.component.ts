import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type Todo = {
  text: string;
  id: number;
  completed: boolean;
};

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  newTodo: string = '';
  todos: Todo[] = [];

  addTodo() {
    console.log({ todos: this.todos, newTodo: this.newTodo });
    if (this.newTodo.trim() !== '') {
      this.todos.push({
        text: this.newTodo,
        id: Date.now(),
        completed: false,
      });

      this.newTodo = '';
    }
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTask(id: number): void {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
}
