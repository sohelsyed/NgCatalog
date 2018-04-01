import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.css']
})
export class CatalogFormComponent implements OnInit {

  name2:String;
  title:String
  constructor() { }

  ngOnInit() {
  
}

  onSubmit(){
    console.log("Form Submitted "+this.name2);
  }


}
