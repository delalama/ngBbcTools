import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitStepsComponent } from './git-steps.component';

describe('GitStepsComponent', () => {
  let component: GitStepsComponent;
  let fixture: ComponentFixture<GitStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
