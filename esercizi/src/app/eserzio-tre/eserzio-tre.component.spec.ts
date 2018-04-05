import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EserzioTreComponent } from './eserzio-tre.component';

describe('EserzioTreComponent', () => {
  let component: EserzioTreComponent;
  let fixture: ComponentFixture<EserzioTreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EserzioTreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EserzioTreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
