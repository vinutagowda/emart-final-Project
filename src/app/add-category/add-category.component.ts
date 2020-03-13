import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../service/items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../model/items';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  isNew: boolean;
 
  msg: any;
  items: Items;
  



  constructor(private service: ItemsService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let itemId = this.actRoute.snapshot.params.itemId;

    if (itemId) {
      this.isNew = false;
      this.service.getById(itemId).subscribe(
        (data) => {
          this.items = data;
        }
      );
    } else {
      this.isNew = true;
      this.items = {
          itemId:0,
          categoryId:0,
          subCatgoryId:0,
          description:"",
          stock:0,
          sellingPrice:0,
          itemName:"",
          image:""
        
      };
    }
  }

  save() {
    let ob: Observable<Items>;

    if (this.isNew) {
      ob = this.service.add(this.items);
    }
    ob.subscribe(
      (data) => {
        
        this.router.navigateByUrl("/cat");
      },
      (errResponse) => {
        this.msg = errResponse.error;

      }
    );
  }
}