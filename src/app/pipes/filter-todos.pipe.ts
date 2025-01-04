import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todos.type';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    if(!searchTerm)
    {
      return todos;
    }
    const text = searchTerm.toLocaleLowerCase();
    return todos.filter(todo => {
      return todo.title.toLocaleLowerCase().includes(text);
    })
  }

}
