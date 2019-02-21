import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCardComponent } from './box-card.component';

describe('BoxCardComponent', () => {
  let component: BoxCardComponent;
  let fixture: ComponentFixture<BoxCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
