import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css']
})


export class ShortcutsComponent implements OnInit {

  shortcutFamily: string = "";
  shortcutAction: string = "";
  shortcutData: string = "";

  constructor() { }

  ngOnInit(): void {
    this.showRandomShortcut();
  }

  firstTime = true;

  showRandomShortcut = () => {
    if(!this.firstTime){
      $(".shortcutInfo").fadeOut();
    }else {
      this.firstTime= false;
    }

    setTimeout(() =>{
      const shortcutString = this.getRandomShortcut();

      var shortcut: shortcut = this.createNewShortcut(shortcutString);

      this.shortcutFamily = shortcut.family.toUpperCase();
      this.shortcutAction = shortcut.action.toUpperCase();
      this.shortcutData  = shortcut.shortcut.toUpperCase();

      $(".shortcutInfo").fadeIn(500);
    }, 300);


  }

  createNewShortcut = (shortcutString: string) => {
    var family = shortcutString.substr(0, shortcutString.indexOf('_'));

    var action = shortcutString.slice(
      shortcutString.indexOf('_') + 1,
      shortcutString.lastIndexOf(':'),
    );

    var shortcutCode = shortcutString.slice(
      shortcutString.indexOf(':') + 1,
      shortcutString.length,
    );

    return new shortcut(family, action, shortcutCode);
  }


  getRandomShortcut = () => {
    const randomNum = this.getRndInteger(0, this.allShortcuts.length);

    return this.allShortcuts[randomNum];
  }

  getRndInteger: any = (min: any, max: any) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }


allShortcuts = [
  "BASIC SHORTCUTS_Smart code completion: Ctrl + Shift + Space",
  "BASIC SHORTCUTS_Search everywhere: Double Shift",
  "BASIC SHORTCUTS_Show intention actions and quick-fixes: Alt + Enter",
  "BASIC SHORTCUTS_Generate code: Alt + Ins",
  "BASIC SHORTCUTS_Parameter info: Ctrl + P",
  "BASIC SHORTCUTS_Extend selection: Ctrl + W",
  "BASIC SHORTCUTS_Shrink selection: Ctrl + Shift + W",
  "BASIC SHORTCUTS_Recent files popup: Ctrl + E",
  "BASIC SHORTCUTS_Rename: Shift + F6",
  "GENERAL_Open corresponding tool window: Alt + #[0-9]",
  "GENERAL_Save all: Ctrl + S",
  "GENERAL_Synchronize: Ctrl + Alt + Y",
  "GENERAL_Toggle maximizing editor: Ctrl + Shift + F12",
  "GENERAL_Inspect current file with current profile: Alt + Shift + I",
  "GENERAL_Quick switch current scheme: Ctrl + BackQuote (`)",
  "GENERAL_Open Settings dialog: Ctrl + Alt + S",
  "GENERAL_Open Project Structure dialog: Ctrl + Alt + Shift + S",
  "GENERAL_Find Action: Ctrl + Shift + A",
  "DEBUGGING_Step over / into: F8/F7",
  "DEBUGGING_Smart step into / Step out: Shift + F7/Shift + F8",
  "DEBUGGING_Run to cursor: Alt + F9",
  "DEBUGGING_Evaluate expression: Alt + F8",
  "DEBUGGING_Resume program: F9",
  "DEBUGGING_Toggle breakpoint: Ctrl + F8",
  "DEBUGGING_View breakpoints: Ctrl + Shift + F8",
  "SEARCH AND REPLACE_Search everywhere: Double Shift",
  "SEARCH AND REPLACE_Find Ctrl: + F",
  "SEARCH AND REPLACE_Find next: / previous F3/Shift + F3",
  "SEARCH AND REPLACE_Replace: Ctrl + R",
  "SEARCH AND REPLACE_Find in path: Ctrl + Shift + F",
  "SEARCH AND REPLACE_Replace in path: Ctrl + Shift + R",
  "SEARCH AND REPLACE_Select next occurrence: Alt + J",
  "SEARCH AND REPLACE_Select all occurrences: Ctrl + Alt + Shift + J",
  "SEARCH AND REPLACE_Unselect occurrence: Alt + Shift + J",
  "EDITING_Basic code completion: Ctrl + Space",
  "EDITING_Smart code completion: Ctrl + Shift + Space",
  "EDITING_Complete statement: Ctrl + Shift + Enter",
  "EDITING_Parameter info: Ctrl + P",
  "EDITING_Quick documentation lookup: Ctrl + Q",
  "EDITING_External Doc: Shift + F1",
  "EDITING_Brief Info: Ctrl + mouse",
  "EDITING_Show descriptions of error at caret: Ctrl + F1",
  "EDITING_Generate code: Alt + Insert",
  "EDITING_Override methods: Ctrl + O",
  "EDITING_Implement methods: Ctrl + I",
  "EDITING_Surround with: Ctrl + Alt + T",
  "EDITING_Comment / uncomment with line comment: Ctrl + /",
  "EDITING_Comment / uncomment with block comment: Ctrl + Shift + /",
  "EDITING_Extend selection: Ctrl + W",
  "EDITING_Shrink selection: Ctrl + Shift + W",
  "EDITING_Context info: Alt + Q",
  "EDITING_Show intention actions and quick-fixes: Alt + Enter",
  "EDITING_Reformat code: Ctrl + Alt + L",
  "EDITING_Optimize imports: Ctrl + Alt + O",
  "EDITING_Auto-indent line(s): Ctrl + Alt + I",
  "EDITING_Indent / unindent selected lines: Tab/Shift + Tab",
  "EDITING_Cut current line to clipboard: Ctrl + X, Shift + Delete",
  "EDITING_Copy current line to clipboard: Ctrl + C , Ctrl + Insert",
  "EDITING_Paste from clipboard: Ctrl + V, Shift + Insert",
  "EDITING_Paste from recent buffers: Ctrl + Shift + V",
  "EDITING_Duplicate current line: Ctrl + D",
  "EDITING_Delete line at caret: Ctrl + Y",
  "EDITING_Smart line join: Ctrl + Shift + J",
  "EDITING_Smart line split: Ctrl + Enter",
  "EDITING_Start new line: Shift + Enter",
  "EDITING_Toggle case for word at caret or selected block: Ctrl + Shift + U",
  "EDITING_Select till code block end / start: Ctrl + Shift + ]/[",
  "EDITING_Delete to word end: Ctrl + Delete",
  "EDITING_Delete to word start: Ctrl + Backspace",
  "EDITING_Expand / collapse code block: Ctrl + NumPad+/-",
  "EDITING_Expand all: Ctrl + Shift + NumPad+",
  "EDITING_Collapse all: Ctrl + Shift + NumPad",
  "EDITING_Close active editor tab: Ctrl + F4",
  "REFACTORING_Copy: F5",
  "REFACTORING_Move: F6",
  "REFACTORING_Safe Delete: Alt + Delete",
  "REFACTORING_Rename: Shift + F6",
  "REFACTORING_Refactor this: Ctrl + Alt + Shift + T",
  "REFACTORING_Change Signature: Ctrl + F6",
  "REFACTORING_Inline: Ctrl + Alt + N",
  "REFACTORING_Extract Method: Ctrl + Alt + M",
  "REFACTORING_Extract Variable: Ctrl + Alt + V",
  "REFACTORING_Extract Field Ctrl: + Alt + F",
  "REFACTORING_Extract Constant: Ctrl + Alt + C",
  "REFACTORING_Extract Parameter: Ctrl + Alt + P",
  "NAVIGATION_Go to class: Ctrl + N",
  "NAVIGATION_Go to file: Ctrl + Shift + N",
  "NAVIGATION_Go to symbol: Ctrl + Alt + Shift + N",
  "NAVIGATION_Go to next / previous editor tab: Alt + Right/Left",
  "NAVIGATION_Go back to previous tool window: F12",
  "NAVIGATION_Go to editor (from tool window): Esc",
  "NAVIGATION_Hide active or last active window: Shift + Esc",
  "NAVIGATION_Go to line: Ctrl + G",
  "NAVIGATION_Recent files popup: Ctrl + E",
  "NAVIGATION_Recent locations popup: Ctrl + Shift + E",
  "NAVIGATION_Navigate back / forward: Ctrl + Alt + Left/Right",
  "NAVIGATION_Navigate to last edit location: Ctrl + Shift + Backspace",
  "NAVIGATION_Select current file or symbol in any view: Alt + F1",
  "NAVIGATION_Go to declaration: Ctrl + B, Ctrl + Click",
  "NAVIGATION_Go to implementation(s): Ctrl + Alt + B",
  "NAVIGATION_Open quick definition lookup: Ctrl + Shift + I",
  "NAVIGATION_Go to type declaration: Ctrl + Shift + B",
  "NAVIGATION_Go to super-method / super-class: Ctrl + U",
  "NAVIGATION_Go to previous / next method: Alt + Up/Down",
  "NAVIGATION_Move to code block end / start: Ctrl + ]/[",
  "NAVIGATION_File structure popup: Ctrl + F12",
  "NAVIGATION_Type hierarchy: Ctrl + H",
  "NAVIGATION_Method hierarchy: Ctrl + Shift + H",
  "NAVIGATION_Call hierarchy: Ctrl + Alt + H",
  "NAVIGATION_Next / Previous highlighted error: F2/Shift + F2",
  "NAVIGATION_Edit source / View source: F4/Ctrl + Enter",
  "NAVIGATION_Show navigation bar: Alt + Home",
  "NAVIGATION_Toggle bookmark: F11",
  "NAVIGATION_Toggle bookmark with mnemonic: Ctrl + F11",
  "NAVIGATION_Go to numbered bookmark: Ctrl + #[0-9]",
  "NAVIGATION_Show bookmarks: Shift + F11",
  "NAVIGATION_COMPILE AND RUN",
  "NAVIGATION_Build project: Ctrl + F9",
  "NAVIGATION_Compile selected file, package or module: Ctrl + Shift + F9",
  "NAVIGATION_Select configuration and run / debug: Alt + Shift + F10/F9",
  "NAVIGATION_Run / Debug: Shift + F10/F9",
  "NAVIGATION_Run context configuration from editor: Ctrl + Shift + F10",
  "NAVIGATION_Run anything: Double Ctrl",
  "NAVIGATION_USAGE SEARCH",
  "NAVIGATION_Find usages / Find usages in file: Alt + F7/Ctrl + F7",
  "NAVIGATION_Highlight usages in file: Ctrl + Shift + F7",
  "NAVIGATION_Show usages: Ctrl + Alt + F7",
  "NAVIGATION_Commit project to VCS: Ctrl + K",
  "NAVIGATION_Update project from VCS: Ctrl + T",
  "NAVIGATION_Push commits: Ctrl + Shift + K",
  "NAVIGATION_‘VCS’ quick popup: Alt + BackQuote (`)",
  "LIVE TEMPLATES_Surround with Live Template: Ctrl + Alt + J",
  "LIVE TEMPLATES_Insert Live Template: Ctrl + J"
];

}


class shortcut {
  family: string;
  action: string;
  shortcut: string;

  constructor(family: any, action: any, shortcut: any) {
    this.family = family;
    this.action = action;
    this.shortcut = shortcut;
  }
}