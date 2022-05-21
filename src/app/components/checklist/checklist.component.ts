import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // STATIC 
  groupNode = $('.task-list-group');


  transform(element: any): void {
    const className = $(element).attr("class");


    var id = className!.charAt(className!.length - 1);

    var inputElementToBeTransformed = $(element).find('input').toArray()[1];

    var nodeText = $(inputElementToBeTransformed).attr('value');

    var text = "<label class='cursor-pointer font-italic d-block custom-control-label' for='customCheck" + id + "'>" + nodeText + "</label>";

    $(inputElementToBeTransformed).removeClass();

    $(inputElementToBeTransformed).addClass('cursor-pointer font-italic d-block custom-control-label');

    $(inputElementToBeTransformed).replaceWith(text);

    console.log(element);

    $(element).attr("class", "list-group-item rounded-" + id);

  }

  transformToCheckList() {
    var liElements = $('.task-list-group li').toArray();

    console.log(liElements);

    liElements.forEach((element, indice, array) => {
      const className = ($(element).attr("class") as string);

      console.log(className);

      className.includes('rounded') ? null : this.transform(element);
    });

  }


  toCheckItem(element: any) {
    console.log(element);
  }

  addCheck() {
    var newNodeId = this.getNewNodeId();

    var newInputNode = this.getInputNode(newNodeId);

    $('.task-list-group').append(newInputNode);
  }

  getNewNodeId() {
    var newId = $('.task-list-group li').length;

    return newId;
  }

  getInputNode(lastId: any) {
    const id = lastId + 1;

    var nodeString = "<li class='list-group-item task-" + id + "'" + "><div class='custom-control custom-checkbox'> <input class='custom-control-input' id='customCheck" + id + "'" + "type='checkbox'>" + "<input class='centerInput' type='text' onchange='changeInputValue(this)' value='' for='customCheck" + id + "'>" + "</div></li>";

    return nodeString;
  }

  changeInputValue(element: any) {
    console.log('valor', element.value);

    $(element).attr('value', element.value);
  }

  getMercName(text: any) {
    var index = text.indexOf("MERC-");

    return text.substring(index);
  }

  changeTaskLink(element: any) {

    $('.taskLinkTitle').remove();

    var nodeText = element.value;

    var mercName = this.getMercName(nodeText);

    var nodeToReplace = "<a href='" + nodeText + "' target='_blank' class='text-muted font-italic mb-4 taskLinkLabel taskLink' type='text' >" + mercName + "</a> <button class='btn btn-info buttonMarginLeft' type='button' onclick='copyTestLink()'>Copy</button>";

    $(element).attr('value', element.value);

    $(element).replaceWith(nodeToReplace);
  }

  copyTestLink(id: any) {

    const selector = ".taskLink";

    const newLocal = ($(selector).val() as string);

    navigator.clipboard.writeText(newLocal);
  }

}
