import { Component, OnInit } from '@angular/core';
import { structtd } from '../product-list/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private pS:ProductService) { }
productItem=new structtd (null,null,null,null,null,null,null,null);
  ngOnInit() {
  }
AddProduct(){
  console.log(this.productItem)
  this.pS.newProduct(this.productItem);
  alert("success")
}
}
