import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetailsModalComponent } from './pizza-details-modal.component';

describe('PizzaDetailsModalComponent', () => {
  let component: PizzaDetailsModalComponent;
  let fixture: ComponentFixture<PizzaDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
