import { Component } from '@angular/core';

@Component({
  selector: 'app-major',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  name="suchitra";
  student=[
    {
      id:1,
      name:"tony",
      age:22,
      address:"Ernakulam",
    },
    {
      id:2,
      name:"ANOOP",
      age:22,
      address:"Ernakulam",
    },
    {
      id:3,
      name:"SAHMEER",
      age:22,
      address:"Ernakulam",
    },
    {
      id:4,
      name:"DRISHYA",
      age:22,
      address:"Ernakulam",
    },
    {
      id:5,
      name:"ashu",
      age:22,
      address:"Ernakulam",
    }
  ]
}
