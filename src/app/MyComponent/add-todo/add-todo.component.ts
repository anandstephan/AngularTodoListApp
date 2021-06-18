import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string | undefined;
  desc!: string;


  constructor() { }

  ngOnInit(): void {
  }


  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    // console.log("test")
  
    const todo={
      sno:Math.random()*10,
      title:this.title,
      desc:this.desc,
      active:true
    }
    
    // console.log(todo)
    this.todoAdd.emit(todo)
  }

}
