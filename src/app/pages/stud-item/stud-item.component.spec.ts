import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudItemComponent } from './stud-item.component';

describe('StudItemComponent', () => {
  let component: StudItemComponent;
  let fixture: ComponentFixture<StudItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
