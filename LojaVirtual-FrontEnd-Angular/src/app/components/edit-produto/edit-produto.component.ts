import { Produto } from './../../model/produto';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styles: []
})
export class EditProdutoComponent implements OnInit {

  produto: Produto;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ProdutoService) { }

  ngOnInit() {

    const produtoId = localStorage.getItem('editProdutoId');
  

    if ( !produtoId ) {
      alert('Ação inválida.');
      this.router.navigate(['list-produto']);
      return;
    }
    

    // validação do arquivo values
    this.editForm = this.formBuilder.group({
      id:[''],
      descricao: ['', Validators.required],
      quantidade: ['', Validators.required],
      codean: ['', Validators.required],
      valor: ['', Validators.required]
    });

    this.service.getProduto(produtoId).subscribe(dados => {this.editForm.setValue(dados);   } );
  }

  onSubmit() {
    this.service.updateProduto(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-produto']);
        swal({
          position: 'top',
          type: 'success',
          title: `Produto editado com Sucesso`,
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}