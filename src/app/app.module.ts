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
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { BannerComponent } from './components/banner/banner.component';
import { GitCheatSheetComponent } from './components/git-cheat-sheet/git-cheat-sheet.component';


const routes: Route[] = [
  { path: "randomMr", component: RandomMrComponent },
  { path: "gitSteps", component: GitStepsComponent },
  { path: "gitCommands", component: GitCheatSheetComponent },
  { path: "checklist", component: ChecklistComponent, data: {reuseRoute: true} },
  { path: "regex", component: RegexComponent },
  { path: "shortcuts", component: ShortcutsComponent },
  { path: "**", component: BannerComponent  }
];


@NgModule({
  declarations: [
    AppComponent,
    RegexComponent,
    ChecklistComponent,
    RandomMrComponent,
    GitStepsComponent,
    ShortcutsComponent,
    SafeUrlPipe,
    BannerComponent,
    GitCheatSheetComponent,
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
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
