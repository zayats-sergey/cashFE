import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesEditorComponent } from './categories-editor.component';

describe('CategoriesEditorComponent', () => {
  let component: CategoriesEditorComponent;
  let fixture: ComponentFixture<CategoriesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
