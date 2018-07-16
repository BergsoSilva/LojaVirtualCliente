import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { EditProdutoComponent } from './components/edit-produto/edit-produto.component';
import { ListProdutoComponent } from './components/list-produto/list-produto.component';
import {routing} from './app.routes';

// Importar rotas
//import { ROUTES, routing } from './app.routes';
//import { RouterModule } from '@angular/router';

// Importar ReactiveFormsModule para los formularios
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddProdutoComponent,
    EditProdutoComponent,
    ListProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }