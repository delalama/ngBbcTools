import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMrComponent } from './random-mr.component';

describe('RandomMrComponent', () => {
  let component: RandomMrComponent;
  let fixture: ComponentFixture<RandomMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomMrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
