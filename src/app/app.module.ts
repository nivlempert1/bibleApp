import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReaderComponent } from './components/reader-component/reader.component';
import {provideRoutes, Routes} from "@angular/router";
import { HomeComponent } from './components/home-component/home.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'texts', component: ReaderComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: provideRoutes(routes),
  bootstrap: [AppComponent]
})
export class AppModule { }
