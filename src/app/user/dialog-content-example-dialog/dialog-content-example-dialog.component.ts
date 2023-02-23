import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoriesService } from '../services/categories.service';
import { DialogServiceService } from '../services/dialog-service.service';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.css']
})
export class DialogContentExampleDialogComponent implements OnInit {

  constructor(
    public categoriesService: CategoriesService, 
    public dialogService: DialogServiceService,
  ) { }
   category: any;


  ngOnInit(): void {
  }
  
  @Input() dialogCategory: any;

  dellCategory(category: Category){
    this.dialogService.curentObservable.subscribe((data)=>{
      if(data !== null && data !== undefined ){
        console.log(data);
        this.dialogCategory = data;
        };
      }); 
      console.log(this.dialogCategory);
    
    this.categoriesService
    .dellCategory(this.dialogCategory)
    .subscribe((res)=>{
      console.log(res);
      
    })
  }

}
