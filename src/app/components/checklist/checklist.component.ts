import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChecklistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todoList: todo[] = [];

  addItem = () => {
    if (this.newTodoName.trim() == '') {
    } else {
      this.todoList.push({
        id: this.todoList.length + 1, name: this.newTodoName
      })

      console.log(this.todoList);

      this.newTodoName = "";

      $('.new-todo').val('');
    }
  }

  newTodoName: string = "";

  addTodoName = (event: any) => {
    console.log(event.key);
    if (this.newTodoName.trim() + event.key == '' && event.key == "Enter") {
      console.log('1a cond');
    } else if(event.key == "Enter") {
      this.addItem();
    } else {
      this.newTodoName += event.key;
    }
  }

  deleteTodo = (id: any) => {

    var index = this.todoList.map(function (item) {
      return item.id
    }).indexOf(id);

    this.todoList.splice(index, 1);
  }


  // task
  todoTask: task[] = [];

  addMercLink = (name: any) => {

    var finalLink: String = "";
    
    if(name.startsWith("MERC")) {
      finalLink = 'https://jira.int.cipal.be/browse/' + name;
    }

    if(!isNaN(name)) {
      finalLink = 'https://jira.int.cipal.be/browse/MERC-' + name;
    }

    if(name.startsWith("http")) {
      finalLink = 'https://jira.int.cipal.be/browse/' + name;
    }

    this.todoTask.push(new task(finalLink));
    
    $("#new-task").hide();
  }

  deleteTask = () => {
    this.todoTask = [];
    $("#new-task").show();
    $("#new-task-input").val('');

  } 

  
  addTask = ( ) => {

  }

}

class todo {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

}class task {
  name: String;
  constructor(name: String) {
    this.name = name;
  }
}