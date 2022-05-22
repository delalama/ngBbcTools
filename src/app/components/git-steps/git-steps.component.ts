import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-steps',
  templateUrl: './git-steps.component.html',
  styleUrls: ['./git-steps.component.css']
})
export class GitStepsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "GIT steps";

  displayedColumns: string[] = ['name', 'code'];
  dataSource = ELEMENT_DATA;


  onSave(elem:any): void {
    console.log(elem);

    navigator.clipboard.writeText(elem.code);
  }
  
  color:string = 'red';
  changeStyle($event : any){
    this.color = $event.type == 'mouseover' ? 'yellow' : 'red';
    console.log($event);
 }

}



const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Development mercurius team', code: "merge MERC-" },
  { name: 'On terminal', code: "git fetch -a -p" },
  { name: '', code: "git rebase origin/master" },
  { name: '', code: "git push -f" },
  { name: 'On GITLAB web interface', code: "	PRESS MERGE BUTTON" },
  { name: 'Development mercurius team', code: "done" },
  { name: 'On JIRA', code: "	PRESS MERGE BUTTON" },
];

export interface PeriodicElement {
  name: string;
  code: string;

}
