import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsercizioDueComponent } from './esercizio-due.component';

describe('EsercizioDueComponent', () => {
  let component: EsercizioDueComponent;
  let fixture: ComponentFixture<EsercizioDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsercizioDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsercizioDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
