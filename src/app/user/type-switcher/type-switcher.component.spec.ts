import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSwitcherComponent } from './type-switcher.component';

describe('TypeSwitcherComponent', () => {
  let component: TypeSwitcherComponent;
  let fixture: ComponentFixture<TypeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
