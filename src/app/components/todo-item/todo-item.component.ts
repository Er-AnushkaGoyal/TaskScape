import { UpperCasePipe } from '@angular/common';
import { Component, input,output } from '@angular/core';
import { HighlightCompletedTodosDirective } from '../../directives/highlight-completed-todos.directive';
import { Todo } from '../../model/todos.type';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodosDirective, UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked(){
    this.todoToggled.emit(this.todo());
  }
}
