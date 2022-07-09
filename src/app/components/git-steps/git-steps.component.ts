import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-steps',
  templateUrl: './git-steps.component.html',
  styleUrls: ['./git-steps.component.css']
})
export class GitStepsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  title = "GIT steps";

  displayedColumns: string[] = ['name', 'code'];
  dataSource = ELEMENT_DATA;
  dataSource_previous_release = PREVIOUS_RELEASE_DATA;

  onSave(elem: any): void {
    navigator.clipboard.writeText(elem.code);
  }

  color: string = 'red';
  changeStyle($event: any) {
    this.color = $event.type == 'mouseover' ? 'yellow' : 'red';
    console.log($event);
  }
}

// DATA
const ELEMENT_DATA: Instruction[] = [
  {name: 'Development mercurius team', code: "merge MERC-"},
  {name: 'On terminal', code: "git fetch -a -p"},
  {name: '', code: "git rebase origin/master"},
  {name: '', code: "git push -f"},
  {name: 'On GITLAB web interface', code: "	PRESS MERGE BUTTON"},
  {name: 'Development mercurius team', code: "done"},
  {name: 'On JIRA', code: "	PRESS MERGE BUTTON"},
];

const PREVIOUS_RELEASE_DATA: Instruction[] = [
  {name: 'On terminal', code: "git checkout release/R.rrr"},
  {name: '', code: "git pull --ff-only"},
  {name: '', code: "git checkout -b feature/MERC-nnnn"},
  {name: '', code: "Do  your  changes,Review procedure"},
  {name: 'Development mercurius team', code: "merge MERC-"},
  {name: 'On terminal', code: "git fetch --all"},
  {name: '', code: "git rebase origin/release/R.rrr"},
  {name: '', code: "git push -f"},
  {name: '', code: "git checkout release/R.rrr"},
  {name: '', code: "git pull --ff-only"},
  {name: '', code: "git merge --no-ff feature/MERC-nnnn"},
  {name: 'On git interface', code: "CHECK  THE  REVISION  GRAPH-NO CROSSING / UNDER THE BRIDGE"},
  {name: '', code: "git push"},
  {name: '', code: "git checkout master"},
  {name: '', code: "git pull --ff-only"},
  {name: '', code: "git merge --no-ff release/R.rrr"},
  {name: '', code: "git push"},
  {name: 'Development mercurius team', code: "done"},
];

export interface Instruction {
  name: string;
  code: string;
}
