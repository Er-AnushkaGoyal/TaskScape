import { NgIf } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { Todo } from '../model/todos.type';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf, TodoItemComponent,FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  todoService = inject(TodosService); 
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal("");
  
  ngOnInit(): void {

    this.todoService.getTodosFromApi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }

  updateTodoItem(todoItem: Todo){
    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if(todo.id == todoItem.id)
        {
          return{
            ...todo,
            completed: !todoItem.completed
          }
        }
        return todo;
      })
    })
  }
}
