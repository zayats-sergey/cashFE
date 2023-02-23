import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OPERATION_TYPES } from '../data/operation-type.data';
import { Category } from '../models/category.model';
import { Operation, OperationType, OperationTypeCode } from '../models/operation.model';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit, OnChanges {
  @Input() categories: Category[] = [];
  @Input() selectedType : OperationTypeCode = 'profit';
  @Input() operations: Operation[] = [];
  @Input() category: Category = {
                                  num:0,
                                  id: 0,
                                  type: 'profit',
                                  name: ''
                                }

  @Input() selectedTypeCode: OperationType[] = OPERATION_TYPES
  @Input() operation: Operation = {
                                    description: 'new',
                                    idOperation: 0,
                                    sum: 0,
                                    category: this.category,
                                    selected: false,
                                  }


  @Input() shortCreatedAt: any;
  @Output() onMergeOperation = new EventEmitter();
  @Output() onAddOperation = new EventEmitter();
  @Output() onDellOperation = new EventEmitter();

  constructor(
    public categoriesServise: CategoriesService,
    ) {}

  ngOnInit(): void { }

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

  // addOperation(operation: Operation){
  //   if(this.category){
  //     let operationNew: Operation = {
  //       description: operation.description,
  //       idOperation: operation.idOperation,
  //       sum: operation.sum,
  //       category: this.category,
  //       selected: false,
  //     }
  //     console.log(operationNew);
  //     this.operationSome = [...this.operationSome, operationNew];
  //     console.log(this.operationSome);
  //     this.onAddOperation.emit(operationNew);
  //   }
  // }

  displayedColumns: string[] = ['number-position', 'description', 'sum', 'nameCategory',  'buttonDelete',  'createdAt'];
  someOperationsWhithCategory: any;
  filterCategoryType(){
    this.someOperationsWhithCategory  =  this.operations.filter ((c)=> c.category.type === this.selectedType);
    // console.log( this.someOperationsWhithCategory );
  }

  operationSome: any;
  filterOperationByNameCategory(){
    if(this.category){
      this.operationSome = this.someOperationsWhithCategory.filter ((c: any)=> c.category.name ===  this.category.name);
      console.log(this.operationSome );
    }
  }

    
    
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });


  selectOperation(operation: Operation) {
    this.operationSome.find((o: Operation) => {
      if (o.selected === true) {
        o.selected = false;
      }
    });
    this.profileForm.setValue ({
      // firstName: operation.description.split('').map((c:any)=> c[0].toUpperCase() + c.slice(1).toLowerCase()).join(''),
      firstName: operation.description = operation.description.replace(operation.description[0], operation.description[0].toUpperCase()),
      lastName: operation.sum
    });
    // console.log(operation.description.replace(operation.description[0], operation.description[0].toUpperCase()));
    // console.log(this.profileForm.value);
    this.operationSome.find((o: Operation)=>{
      if(o._id === operation._id){
        o.selected = true;
      }
    });
  }

  mergeOperation(event: any, operation: any){
     event.preventDefault();
   operation.description = this.profileForm.get('firstName')?.value;
   operation.sum = this.profileForm.get('lastName')?.value;
   operation.description = operation.description.replace(operation.description[0], operation.description[0].toUpperCase()),
    operation.selected = false;
    this.onMergeOperation.emit(operation);
    // delete operation.selected;
  }


  dellOperation(operation: Operation){
    this.onDellOperation.emit(operation);
  }

  getTotalCost() {
    return this.operationSome.map((t: any)=> t.sum).reduce((acc: any, value: any) => +acc + +value, 0);
  }
  
}
