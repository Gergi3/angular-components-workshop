import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCreateCommentComponent } from './theme-create-comment.component';

describe('ThemeCreateCommentComponent', () => {
  let component: ThemeCreateCommentComponent;
  let fixture: ComponentFixture<ThemeCreateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeCreateCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeCreateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
