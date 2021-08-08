import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personel } from 'src/app/models/personel';
import { PersonelIzin } from 'src/app/models/personel-izin';
import { PersonelDto } from 'src/app/models/personelDto';
import { PersonelIzinService } from 'src/app/services/personel-izin.service';

@Component({
  selector: 'app-personel-izin-list',
  templateUrl: './personel-izin-list.component.html',
  styleUrls: ['./personel-izin-list.component.css']
})
export class PersonelIzinListComponent implements OnInit {

  
  personeller: PersonelIzin[] = [];
  personelDto:PersonelDto[]=[];

  constructor(
    private personelIzinService: PersonelIzinService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPersonelDto();
  }

  getPersonelIzin() {
    this.personelIzinService.getPersonelIzinler().subscribe(response => {
      this.personeller = response.data
    })
  }

  getPersonelDto(){
    this.personelIzinService.getPersonelDto().subscribe(response=>{
      this.personelDto=response.data
    })
  }


}
