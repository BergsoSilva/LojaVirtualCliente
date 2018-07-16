import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styles: []
})
export class AddProdutoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ProdutoService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      descricao: ['', Validators.required],
      quantidade: ['', Validators.required],
      codean: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createProduto( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-produto']);
        swal({
          position: 'top',
          type: 'success',
          title: `Produto adiconado com sucesso.`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}