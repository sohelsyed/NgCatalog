import { User } from '../User';
import { CatalogRestService } from './../catalog-rest.service';
import { Component, OnInit,Inject } from '@angular/core';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers:[CatalogRestService]
})
export class CatalogComponent implements OnInit {

  list: User[];

  constructor(private service: CatalogRestService) {
    console.log('Inisde Constructor');
  }
 
  ngOnInit() {
    console.log("Inside On Init");
    this.list = []; 
    this.service.getAll().subscribe((e)=>{
      let user = new User();
      user.id = e.toString();
      console.log("A"+this.list);
      this.list.push(user);
     //  e.forEach(e=>this.list.push(e.d));
    });
  }
}