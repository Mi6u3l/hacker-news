import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbyScoreComponent } from './orderby-score.component';

describe('OrderbyScoreComponent', () => {
  let component: OrderbyScoreComponent;
  let fixture: ComponentFixture<OrderbyScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderbyScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderbyScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
