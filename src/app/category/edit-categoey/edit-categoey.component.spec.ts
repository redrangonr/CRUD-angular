import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoeyComponent } from './edit-categoey.component';

describe('EditCategoeyComponent', () => {
  let component: EditCategoeyComponent;
  let fixture: ComponentFixture<EditCategoeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
