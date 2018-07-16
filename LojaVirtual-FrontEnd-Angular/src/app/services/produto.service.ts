import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/produto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl ='http://localhost:8080/api/produtos';
  
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
    console.log('Servico e produto funcionando');
  }
  listaProdutos() {
    return this.http.get<any[]>(this.baseUrl);
  }
  getProdutos(): Observable<Produto[]> {
    return this.http.get(this.baseUrl).pipe(map(data => data as Produto[]));
  }

  getProduto(id: String): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/${id}`);
  }

  createProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto, { headers: this.httpHeaders });
  }

  updateProduto(id: String): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseUrl}/${id}`, { headers: this.httpHeaders });
  }

  deleteProduto(id: String): Observable<Produto> {
    return this.http.delete<Produto>(`${this.baseUrl}/${id}`, { headers: this.httpHeaders });
  }
}