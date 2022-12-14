import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorItemComponent } from './form-error-item.component';

describe('FormErrorItemComponent', () => {
  let component: FormErrorItemComponent;
  let fixture: ComponentFixture<FormErrorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormErrorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
