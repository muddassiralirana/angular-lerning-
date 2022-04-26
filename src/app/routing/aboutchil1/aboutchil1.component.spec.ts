import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutchil1Component } from './aboutchil1.component';

describe('Aboutchil1Component', () => {
  let component: Aboutchil1Component;
  let fixture: ComponentFixture<Aboutchil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aboutchil1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aboutchil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
