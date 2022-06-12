import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { getCookie, setCookie } from 'typescript-cookie';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChecklistComponent implements OnInit {

  actualTask: CookieTask = {
    name: "",
    steps: [],
    date: 0
  }

  constructor() { }

  ngOnInit(): void {
    this.prepareCookies();
    this.openLastTask();
  }

  public prepareCookies() {
    var cookieText = getCookie('savedTasks');

    if (cookieText == null) {
      var emptyCookie = {
        name: '',
        steps: [],
        date: 0
      }

      this.addToCookie(emptyCookie)
    }
  }

  public getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    console.log(document.cookie);
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  public deleteCookie(cookieName: string) {
    // this.setCookie({ name: cookieName, value: '', expireDays: -1 });
  }

  public addToCookie(params: CookieTask) {

    if (getCookie('savedTasks') != null) {
      var savedCookies: CookieTask[] = this.parseCookies();
      savedCookies.push(params);

      setCookie('savedTasks', JSON.stringify(savedCookies));
    } else {
      setCookie('savedTasks', JSON.stringify(params));
    }

  }

  parseCookies(): CookieTask[] {
    var cookieText = getCookie('savedTasks');

    if (cookieText != null) {
      var parsedCookie: CookieTask = JSON.parse(cookieText);

      var cookie1: CookieTask = new CookieTask(parsedCookie.name, parsedCookie.steps, parsedCookie.date);

      var cookieArray: CookieTask[] = [];

      cookieArray.push(cookie1);

      return cookieArray;
    }


    var parsedCookies: [] = JSON.parse(this.getCookie('savedTasks'));

    return parsedCookies;
  }

  public openLastTask() {
    console.log('getCookie', getCookie('savedTasks'));

    var cookie: string = getCookie('savedTasks')!;

    var parsedCookies: CookieTask[] = JSON.parse(cookie);

    var lastTask = parsedCookies[parsedCookies.length - 1];

    lastTask.steps.forEach((value) => {
      this.todoList.push(value);
    });

    this.addMercLink(lastTask.name)

  }

  ngOnDestroy(): void {
    this.actualTask.date = Date.now();
    console.log(this.todoList);

    this.actualTask.steps = this.todoList;

    if (this.actualTask.steps.length > 0) {
      this.addToCookie(this.actualTask);
    }
  }

  todoList: todo[] = [];

  addItem = () => {
    if (this.newTodoName.trim() == '') {
    } else {
      this.todoList.push({
        id: this.todoList.length + 1, name: this.newTodoName
      })

      this.newTodoName = "";
      $('.new-todo').val('');
    }
  }

  newTodoName: string = "";

  public addTodoName = (text: any) => {
    if (this.newTodoName.trim() + text == '') {
      console.log('1a cond');
    } else {
      this.newTodoName += text;
      console.log('2a cond');
      this.addItem();
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

    if (name.startsWith("MERC")) {
      finalLink = 'https://jira.int.cipal.be/browse/' + name;
    }

    if (!isNaN(name)) {
      finalLink = 'https://jira.int.cipal.be/browse/MERC-' + name;
    }

    if (name.startsWith("http")) {
      finalLink = 'https://jira.int.cipal.be/browse/' + name;
    }

    this.todoTask.push(new task(finalLink));

    console.log('finalLink', name);
    this.actualTask.name = name;

    $("#new-task").hide();
  }

  deleteTask = () => {
    this.todoTask = [];
    $("#new-task").show();
    $("#new-task-input").val('');

  }

  cleanTask = () => {
    this.deleteTask();
    this.todoList = [];
  }

  addTask = () => {
  }

}

class todo {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class task {
  name: String;
  constructor(name: String) {
    this.name = name;
  }
}

class CookieTask {
  name: String;
  steps: todo[];
  date: number;
  constructor(name: String, steps: todo[], date: number) {
    this.name = name;
    this.steps = steps;
    this.date = date;
  }
}