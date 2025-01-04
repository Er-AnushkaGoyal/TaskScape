import { Directive, input, inject, effect, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodos]',
  standalone: true
})
export class HighlightCompletedTodosDirective {
  isCompleted = input(false);
  el = inject(ElementRef);
  styleEffect = effect(() =>{
    if(this.isCompleted()){
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.BackgroundColor = '#d3f9d8' ;
      this.el.nativeElement.style.color = '#6c757d';
    }
    else{
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.BackgroundColor = '#fff' ;
      this.el.nativeElement.style.color = '#000';
    }
  })
}
