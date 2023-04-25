import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshpassComponent } from './refreshpass.component';

describe('RefreshpassComponent', () => {
  let component: RefreshpassComponent;
  let fixture: ComponentFixture<RefreshpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
