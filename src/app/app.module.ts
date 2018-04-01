import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HttpClientModule} from '@angular/common/http';
import { CatalogFormComponent } from './catalog-form/catalog-form.component';
import { FormsModule} from '@angular/forms'

const ROUTING = [
  {path:'showAll', component:CatalogComponent},
  {path:'addEdit', component:CatalogFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CatalogFormComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTING),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
