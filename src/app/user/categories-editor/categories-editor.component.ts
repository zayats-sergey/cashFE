import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { OPERATION_TYPES } from '../data/operation-type.data';
import { Category } from '../models/category.model';
import { OperationType, OperationTypeCode } from '../models/operation.model';

@Component({
  selector: 'app-categories-editor',
  templateUrl: './categories-editor.component.html',
  styleUrls: ['./categories-editor.component.css']
})
export class CategoriesEditorComponent implements OnInit {
  num: string = '';
  id: string = '';
  type:  string = '';
  name:  string = '';
  @Input() selectedType: OperationType[] = OPERATION_TYPES
  @Input() category?: Category;
  @Output() onAddNewCategory = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  addNewCategory(num: string = '', id: string = '', type:  string = '',
  name:  string = ''){
    console.log (this.selectedType);
    for (let index = 0; index < this.selectedType.length; index++) {
      const element = this.selectedType[index].code;
      if(this.type === element){
        this.num = num;
        this.id = id;
        this.type = type;
        this.name = name;
        let category = { num, id, type, name};
        // console.log(category);
        this.onAddNewCategory.emit(category)
      }
    }
    this.num = '';
    this.id = '';
    this.type = '';
    this.name = '';
  }


  
}
