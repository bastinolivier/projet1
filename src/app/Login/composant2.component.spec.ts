import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant2Component } from './composant2.component';

describe('Composant2Component', () => {
  let component: Composant2Component;
  let fixture: ComponentFixture<Composant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Composant2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Composant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
