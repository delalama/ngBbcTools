import { Component, OnInit } from '@angular/core';
import { Instruction } from "../git-steps/git-steps.component";

var GitInstruction = {
  task: String,
  notes: String,
  command: String,
}

@Component({
  selector: 'app-git-cheat-sheet',
  templateUrl: './git-cheat-sheet.component.html',
  styleUrls: ['./git-cheat-sheet.component.css']
})
export class GitCheatSheetComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  dataSource = GIT_COMMANDS;
  displayedColumns: string[] = ['task', 'notes', 'command'];
  onSave(elem: any): void {
    navigator.clipboard.writeText(elem.command);
  }
  color: string = 'red';
}

let GIT_COMMANDS: GitInstruction[] = [
  {task: 'Tell Git who you are', notes: 'Configure the author name and email address to be used with your commits.Note that Git strips some characters (for example trailing periods) from user.name.', command: 'git config --global user.name "Sam Smith" \n git config --global user.email sam@example.com'},
  {task: 'Create a new local repository', notes: '', command: 'git init'},
  {task: 'Check out a repository', notes: 'Create a working copy of a local repository ', command: 'git clone /path/to/repository '},
  {task: 'Check out a repository', notes: 'For a remote server', command: 'git clone username@host:/path/to/repository'},
  {task: 'Add files', notes: 'Add one or more files to staging', command: 'git add <filename>'},
  {task: 'Add files', notes: 'Add more than one files to staging', command: 'git add *'},
  {task: 'Commit', notes: 'Commit changes to head (but not yet to the remote repository) ', command: 'git commit -m "Commit message"'},
  {task: 'Commit', notes: 'Commit any files you have added with git add, and also commit any files you have changed since then:', command: 'git commit -a'},
  {task: 'Push', notes: 'Send changes to the master branch of your remote repository', command: 'git push origin master'},
  {task: 'Status', notes: 'List the files you have changed and those you still need to add or commit:',command: 'git status'},
  {task: 'Connect to a remote repository', notes: 'If you have not connected your local repository to a remote server, add the server to be able to push to it.', command: 'git remote -v'},
  {task: 'Connect to a remote repository', notes: 'List all currently configured remote repositories', command: 'git remote add origin <server>'},
  {task: 'Branches', notes: 'Create a new branch and switch to it', command: 'git checkout -b <branchname>'},
  {task: 'Branches', notes: 'Switch from one branch to another', command: 'git checkout <branchname>'},
  {task: 'Branches', notes: 'List all the branches in your repo, and also tell you what branch you are currently in:', command: 'git branch'},
  {task: 'Branches', notes: 'Delete the feature branch', command: 'git branch -d <branchname>'},
  {task: 'Branches', notes: 'Push the branch to your remote repository, so others can use it', command: 'git push origin <branchname>'},
  {task: 'Branches', notes: 'Push all branches to your remote repository', command: 'git push --all origin'},
  {task: 'Branches', notes: 'Delete a branch on your remote repository', command: 'git push origin :<branchname>'},
  {task: 'Update', notes: 'from the remote repository	Fetch and merge changes on the remote server to your working directory', command: 'git pull'},
  {task: 'Update', notes: 'To merge a different branch into your active branch', command: 'git merge <branchname>'},
  {task: 'Update', notes: 'View all the merge conflicts', command: 'git diff'},
  {task: 'Update', notes: 'View the conflicts against the base file', command: 'git diff --base <filename>'},
  {task: 'Update', notes: 'Preview changes, before merging', command: 'git diff <sourcebranch> <targetbranch>'},
  {task: 'Update', notes: 'After you have manually resolved any conflicts, you mark the changed file', command: 'git add <filename>'},
  {task: 'Tags', notes: 'You can use tagging to mark a significant changeset, such as a release', command: 'git tag 1.0.0 <commitID>'},
  {task: 'Tags', notes: 'CommitId is the leading characters of the changeset ID, up to 10, but must be unique. Get the ID using', command: 'git log'},
  {task: 'Tags', notes: 'Push all tags to remote repository', command: 'git push --tags origin'},
  {task: 'Undo local changes', notes: 'If you mess up, you can replace the changes in your working tree with the last content in head Changes already added to the index, as well as new files, will be kept.', command: 'git checkout -- <filename>'},
  {task: 'Undo local changes', notes: 'Instead, to drop all your local changes and commits, fetch the latest history from the server and point your local master branch at it, do this', command: 'git fetch origin \n git reset --hard origin/master'},
  {task: 'Search', notes: 'Search the working directory for foo()', command: 'git grep "foo()"'},
];

export interface GitInstruction {
  task: string;
  notes: string;
  command: string;
}



