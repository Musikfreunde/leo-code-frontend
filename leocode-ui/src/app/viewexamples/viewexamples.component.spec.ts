import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexamplesComponent } from './viewexamples.component';

describe('ViewexamplesComponent', () => {
  let component: ViewexamplesComponent;
  let fixture: ComponentFixture<ViewexamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewexamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
