import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./modules/auth.module').then(m => m.AuthModule) },
    { path: 'users', loadChildren: () => import('./modules/user.module').then(m => m.UserModule) },
    { path: 'sales', loadChildren: () => import('./modules/sale.module').then(m => m.SaleModule) },
    { path: 'products', loadChildren: () => import('./modules/product.module').then(m => m.ProductModule) },
    { path: '', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
