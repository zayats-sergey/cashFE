import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Category } from '../models/category.model';
import { Operation, OperationTypeCode } from '../models/operation.model';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor(
    public categoriesServise: CategoriesService,
  ) { }

  @Input() selectedType : OperationTypeCode = 'profit';
  @Input() operations: Operation[] = [];
  @Input() category: Category = {
    num:0,
    id: 0,
    type: 'profit',
    name: ''
  }

  @Input() operation: Operation = {
        description: 'new',
        idOperation: 0,
        sum: 0,
        category: this.category,
        selected: false,
      }

  @Output() onAddOperation = new EventEmitter();
  @Output() onSelectDataStart = new EventEmitter();
  
  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.filterCategoryType();
    this.filterOperationByNameCategory();
    this.categoriesServise.curentObservable.subscribe((data)=>{
      if(data !== null && data !== undefined &&  this.operationSome !== undefined){
        console.log(data);
        this.operationSome = this.operationSome.filter((c: any)=> c.category.name !== data);
        };
        // console.log(this.operationSome);
      }); 
  }


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  selectData(){
    this.range.setValue({
      start: this.range.value.start,
      end: this.range.value.end 
    })
    let newStart = this.range.get('start')?.value;
    let newEnd = this.range.get('end')?.value;
    this.onSelectDataStart.emit({newStart: newStart, newEnd: newEnd});
  }

  events: string[] = [];
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log(event.value);
    this.selectData();
  }


  operationSome: any;
  addOperation(operation: Operation){
    if(this.category){
      let operationNew: Operation = {
        description: operation.description,
        idOperation: operation.idOperation,
        sum: operation.sum,
        category: this.category,
        selected: false,
      }
      console.log(operationNew);
      this.operationSome = [...this.operationSome, operationNew];
      console.log(this.operationSome);
      this.onAddOperation.emit(operationNew);
    }
  }

  someOperationsWhithCategory: any;
  filterCategoryType(){
    this.someOperationsWhithCategory  =  this.operations.filter ((c)=> c.category.type === this.selectedType);
    // console.log( this.someOperationsWhithCategory );
  }

  filterOperationByNameCategory(){
    if(this.category){
      this.operationSome = this.someOperationsWhithCategory.filter ((c: any)=> c.category.name ===  this.category.name);
      console.log(this.operationSome );
    }
  }



}
