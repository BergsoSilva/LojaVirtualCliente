import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { EditProdutoComponent } from './components/edit-produto/edit-produto.component';
import { ListProdutoComponent } from './components/list-produto/list-produto.component';
import { APP_ROOT } from '../../node_modules/@angular/core/src/di/scope';

const ROUTES: Routes = [
    { path: 'add-produto', component: AddProdutoComponent },
    { path: 'edit-produto', component: EditProdutoComponent },
    { path: 'list-produto', component: ListProdutoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-produto' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-produto' }
];

export const routing : ModuleWithProviders=RouterModule.forRoot(ROUTES);