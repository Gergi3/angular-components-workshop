import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideListItemComponent } from './aside-list-item.component';

describe('AsideListItemComponent', () => {
  let component: AsideListItemComponent;
  let fixture: ComponentFixture<AsideListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
