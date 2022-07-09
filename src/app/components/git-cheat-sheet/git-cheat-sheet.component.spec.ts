import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCheatSheetComponent } from './git-cheat-sheet.component';

describe('GitCheatSheetComponent', () => {
  let component: GitCheatSheetComponent;
  let fixture: ComponentFixture<GitCheatSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitCheatSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCheatSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
