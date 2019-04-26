import { Component, OnInit } from '@angular/core';
import { structtd } from './product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]

})
export class ProductListComponent implements OnInit {
  
  
  imagewidth:number=200;
  imagemargin:number=2;
  show_image:boolean=false;
  products: structtd [];
  
  toggleimage(): void{
    this.show_image=!this.show_image;
  }
  constructor(private pS:ProductService) { }

  ngOnInit(): void{
    this.pS.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });
  }
}
  
