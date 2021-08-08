import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonelIzinComponent } from './components/personel-izin/personel-izin.component';
import { PersonelListComponent } from './components/personel-list/personel-list.component';
import { NaviComponent } from './components/navi/navi.component';
import { PersonelIzinListComponent } from './components/personel-izin-list/personel-izin-list.component';
import { PersonelIzinUpdateComponent } from './components/personel-izin-update/personel-izin-update.component';
import { PersonelAddComponent } from './components/personel-add/personel-add.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonelIzinComponent,
    PersonelListComponent,
    NaviComponent,
    PersonelIzinListComponent,
    PersonelIzinUpdateComponent,
    PersonelAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
