import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppuserslistComponent } from './appuserslist.component';

describe('AppuserslistComponent', () => {
  let component: AppuserslistComponent;
  let fixture: ComponentFixture<AppuserslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppuserslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppuserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
