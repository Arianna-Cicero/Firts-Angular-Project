import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeUserComponent } from './createe-user.component';

describe('CreateeUserComponent', () => {
  let component: CreateeUserComponent;
  let fixture: ComponentFixture<CreateeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
