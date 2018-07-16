import { Produto } from './../../model/produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styles: []
})
export class ListProdutoComponent implements OnInit {

  //produtos:Produto[];

  produtos=[];

  constructor(private router: Router, private service: ProdutoService) { }

  ngOnInit() {

  this.service.getProdutos().subscribe(dados => (this.produtos = dados));
    //this.consultarProduto();
  }

  consultarProduto() {
    return this.service.listaProdutos().subscribe(dados => this.produtos = dados);
  }


  deleteProduto(produto: Produto): void {
    swal({
      title: 'Excluir Produto?',
      text: `Deseja exluir cliente ${produto.descricao} ${
        produto.descricao
        }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, Excluir!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deleteProduto(produto.id).subscribe(() => {
          this.produtos = this.produtos;//.filter(c => c !== produto);
        });

        swal('Excluido!', 'Este produto foi Excluido.', 'success');
      }
    });
  }

  editProduto(produto: Produto): void {
    localStorage.removeItem('editProdutoId');
    localStorage.setItem('editProdutoId',produto.id.toString());
    this.router.navigate(['edit-produto']);
  }

  addProduto(): void {
    this.router.navigate(['add-produto']);
  }
}