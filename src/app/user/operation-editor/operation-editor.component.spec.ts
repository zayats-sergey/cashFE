import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationEditorComponent } from './operation-editor.component';

describe('OperationEditorComponent', () => {
  let component: OperationEditorComponent;
  let fixture: ComponentFixture<OperationEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
