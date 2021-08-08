import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonelAddComponent } from './components/personel-add/personel-add.component';
import { PersonelIzinListComponent } from './components/personel-izin-list/personel-izin-list.component';
import { PersonelIzinUpdateComponent } from './components/personel-izin-update/personel-izin-update.component';
import { PersonelIzinComponent } from './components/personel-izin/personel-izin.component';
import { PersonelListComponent } from './components/personel-list/personel-list.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:PersonelListComponent},
  {path:"personel-list",pathMatch:"full", component:PersonelListComponent},
  {path:"personel-izin",pathMatch:"full", component:PersonelIzinComponent},
  {path:"personel-izin-list",pathMatch:"full", component:PersonelIzinListComponent},
  {path:"personel-izin/update/:id",component:PersonelIzinUpdateComponent},
  {path:"personel/add",component:PersonelAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
