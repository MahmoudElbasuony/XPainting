import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './components/panel/panel.component';
import { AppComponent } from './app.component';

const routes: Routes = [


  {
    path: 'app',
    component: PanelComponent
  },
  {
    path: '**',
    redirectTo: '/notfound'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
