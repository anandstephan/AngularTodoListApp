import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = [];
  constructor() { 
    this.todos =[
  {
    sno:1,
    title:'Todo 1',
    desc:'This is Todo 1',
    active:true
  },
  {
    sno:2,
    title:'Todo 2',
    desc:'This is Todo 2',
    active:true
  },
  {
    sno:3,
    title:'Todo 3',
    desc:'This is Todo 3',
    active:true
  },     
    ]
  }

  ngOnInit(): void {
  }

}
