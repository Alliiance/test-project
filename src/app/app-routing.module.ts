import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyExchangeComponent } from './pages/currency-exchange/currency-exchange.component';
import { InlinePageComponent } from './pages/inline-page/inline-page.component';

const routes: Routes = [
  { path:'',  component: CurrencyExchangeComponent },
  { path: 'inline-info/:id', component: InlinePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
