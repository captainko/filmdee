import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBackgroundComponent } from './video-background.component';

describe('VideoBackgroundComponent', () => {
  let component: VideoBackgroundComponent;
  let fixture: ComponentFixture<VideoBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
