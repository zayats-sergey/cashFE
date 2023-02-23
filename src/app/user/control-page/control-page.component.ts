import { Component,  OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { forkJoin } from 'rxjs';
import { Category } from '../models/category.model';
import { Operation, OperationTypeCode } from '../models/operation.model';
import { CategoriesService } from '../services/categories.service';
import { DialogServiceService } from '../services/dialog-service.service';
import { OperationsService } from '../services/operations.service';

@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.css']
})
export class ControlPageComponent implements OnInit {
  
  selectedType : OperationTypeCode = 'profit';
  categories: Category[] = [];
  category: any;
  operations  : Operation[] = [];

  constructor(
    private categoriesServise: CategoriesService,
    private operationService: OperationsService,
    private flashMessages: FlashMessagesService,
    private dialogService: DialogServiceService,
  ) { }

  ngOnInit(): void {
    this.getData();
    // setTimeout(()=>{
    //   this.addDataCategories();
    // },1000
    // )
    
    // setTimeout(()=>{
    //   this.addDataOperations();
    // },1000);
      
  }

  getData(){
   forkJoin({
    categories: this.categoriesServise.getCategories(),
    operations: this.operationService.getOperations(),
   }).subscribe(({categories, operations})=>{
    this.categories = categories;
    this.operations = operations;
   })
  }

  selectType(data: OperationTypeCode){
    this.selectedType = data;
  }

  selectCategory(data: Category){
    this.category = data;
    console.log(this.category.name);
  }

  addDataCategories(){
    console.log(this.categories);
    for(let i = 0; i < this.categories.length; i++){
      const oneCategory = this.categories[i];
      console.log(oneCategory);
      
      this.categoriesServise
      .addDataCategories(oneCategory)
      .subscribe((res)=>{
        console.log(res);
      })
    }
  }

  addDataOperations(){
    for (let index = 0; index < this.operations.length; index++) {
      const oneOperation = this.operations[index];
      console.log(oneOperation);
      this.operationService
        .addOperation(oneOperation)
        .subscribe((res)=>{
          console.log(res);
        })
    }
  }


  addNewCategory(category: any){
    this.categories
   
    this.categoriesServise
    .addNewCategory(category)
    .subscribe((res)=>{
      console.log(res);
      this.categories = [...this.categories, res]
    })
  }

  dellCategory(category: any){
    console.log(category);
    
    this.categoriesServise
    .dellCategory(category)
    .subscribe((res)=>{
      console.log(res);
      this.categories = this.categories.filter((c)=> c._id !== res._id);
      console.log(this.categories);
      this.flashMessages.show('категория удалена',{
        cssClass: 'alert-success',
        timeout : 5000,
      })
    })
  }

  operationToUpperCase: Operation;
  mergeOperation(operation: Operation){
    // this.operationToUpperCase = 
    //   {
    //     description: operation.description.replace(operation.description[0], operation.description[0].toUpperCase()),  
    //     idOperation: operation.idOperation,
    //     category: {
    //         num:operation.category.num,
    //         id: operation.category.id,
    //         type: operation.category.type,
    //         name: operation.category.name,
    //     },
    //     sum: operation.sum,
    //     selected: false,
    //     };
    // console.log(this.operationToUpperCase );
    // console.log(operation);
    this.operationService
    .mergeOperation(operation)
    .subscribe((res)=>{
      console.log(res);
    })
  }

  shortCreatedAt: any;  
  addOperation(operation: Operation){
    this.operationService
    .addOperation(operation)
    .subscribe((res)=>{
      console.log(res);
      this.shortCreatedAt = [res.createdAt][0].split('').slice(0, 10).join('')
      console.log(this.shortCreatedAt);
      this.operations = [...this.operations, res];
    })
  }

  dellOperation(operation: Operation){
    this.operationService
    .dellOperation(operation)
    .subscribe((res)=>{
      console.log(res);
      this.operations = this.operations.filter((o)=>o._id !== res._id);
    })
  }


  selectDataStart(newStart: any){
    if(newStart !== null){
      this.operationService
      .selectDataStart(newStart)
      .subscribe((res)=>{
        console.log(res);
        this.operations = res;
      })
    }
  };


  dialogCategory: Category;
  onSelectCategory(category: Category){
    this.dialogCategory = category;
    console.log(this.dialogCategory);
    this.dialogService
      .onSelectCategory(this.dialogCategory)
      .subscribe((res)=>{
        console.log(res);
      })
  }


  

}
