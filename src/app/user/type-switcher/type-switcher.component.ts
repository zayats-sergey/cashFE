import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OPERATION_TYPES } from '../data/operation-type.data';
import { OperationType, OperationTypeCode } from '../models/operation.model';

@Component({
  selector: 'app-type-switcher',
  templateUrl: './type-switcher.component.html',
  styleUrls: ['./type-switcher.component.css']
})
export class TypeSwitcherComponent implements OnInit {

  @Input() types : OperationType[] =  OPERATION_TYPES;
  @Input() selectedType : OperationTypeCode = 'profit';
  @Output() onSelectType = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectType(data: OperationTypeCode){
    // this.selectedType = data;
    this.onSelectType.emit(data)
  }

}
