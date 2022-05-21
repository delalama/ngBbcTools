import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegexComponent } from './components/regex/regex.component';
import { RouterModule, Route } from "@angular/router";
import { ChecklistComponent } from './components/checklist/checklist.component';
import { RandomMrComponent } from './components/random-mr/random-mr.component';
import { GitStepsComponent } from './components/git-steps/git-steps.component';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';
import { MatTableModule } from '@angular/material/table';

const routes: Route[] = [
  { path: "randomMr", component: RandomMrComponent },
  { path: "gitSteps", component: GitStepsComponent },
  { path: "checklist", component: ChecklistComponent },
  { path: "regex", component: RegexComponent },
  { path: "shortcuts", component: ShortcutsComponent },
  { path: "**", redirectTo: "home" }
];


@NgModule({
  declarations: [
    AppComponent,
    RegexComponent,
    ChecklistComponent,
    RandomMrComponent,
    GitStepsComponent,
    ShortcutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
