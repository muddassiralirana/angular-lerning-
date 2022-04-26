import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutchil2Component } from './aboutchil2.component';

describe('Aboutchil2Component', () => {
  let component: Aboutchil2Component;
  let fixture: ComponentFixture<Aboutchil2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aboutchil2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aboutchil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
