import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from '../dialog-content-example-dialog/dialog-content-example-dialog.component';
import { Category } from '../models/category.model';
import { OperationTypeCode } from '../models/operation.model';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnChanges {
  @Input() categories: Category[] = [];
  @Input() selectedType : OperationTypeCode = 'profit';
  @Output() onSelectCategory = new EventEmitter();
  @Output() onDellCategory = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    public categoriesServise: CategoriesService,
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.filterCategoryType();
    this.categoriesServise.curentObservable.subscribe((data)=>{
      if(data !== null && data !== undefined ){
        // console.log(data);
        this.someCategories = this.someCategories.filter((c)=> c.name !== data);
        };
      }); 
      // console.log(this.someCategories);
  }

  @Input() category: any;
  selectCategory(category: Category){
    this.category = category
    this.onSelectCategory.emit(this.category);
  }


  displayedColumns: string[] = ['number-position', 'buttonSelect', 'type', 'name', 'createdAt', 'buttonDelete'];
  someCategories:  Category[] = [];
  numberPosition: number = 0;
  filterCategoryType(){
    this.someCategories  =  this.categories.filter ((c)=> c.type === this.selectedType);
    
  }

  dellCategory(category: Category){
    this.onDellCategory.emit(category)
  }

  openDialog(category: any) {
    this.onSelectCategory.emit(category)

    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}


