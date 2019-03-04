import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbCommentComponent } from './fb-comment.component';

describe('FbCommentComponent', () => {
  let component: FbCommentComponent;
  let fixture: ComponentFixture<FbCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
