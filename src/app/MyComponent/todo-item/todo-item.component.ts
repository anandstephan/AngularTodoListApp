import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() checkboxTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(todo:Todo){
    this.deleteTodo.emit(todo);
    // console.log("TESTED!!!",todo)
  }

  onCheckBoxClick(todo: Todo){
    this.checkboxTodo.emit(todo);
  }


}
