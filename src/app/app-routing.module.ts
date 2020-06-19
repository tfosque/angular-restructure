import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosticComponent } from './diagnostic/diagnostic/diagnostic.component';


const routes: Routes = [
  {path: 'diag', component: DiagnosticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
