import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { StreamComponent } from '../stream/stream.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, children: [
      { path: 'user/:userid', component: StreamComponent },
    ]
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [],
  declarations: [],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }