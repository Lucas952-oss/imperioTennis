import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacosteComponent } from './lacoste.component';

describe('LacosteComponent', () => {
  let component: LacosteComponent;
  let fixture: ComponentFixture<LacosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LacosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
