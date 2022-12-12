import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDetailsCommentComponent } from './theme-details-comment.component';

describe('ThemeDetailsCommentComponent', () => {
  let component: ThemeDetailsCommentComponent;
  let fixture: ComponentFixture<ThemeDetailsCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeDetailsCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeDetailsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
