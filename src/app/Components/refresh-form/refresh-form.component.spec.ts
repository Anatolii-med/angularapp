import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshFormComponent } from './refresh-form.component';

describe('RefreshFormComponent', () => {
  let component: RefreshFormComponent;
  let fixture: ComponentFixture<RefreshFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
