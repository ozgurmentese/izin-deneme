import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personel } from 'src/app/models/personel';
import { PersonelIzin } from 'src/app/models/personel-izin';
import { PersonelIzinService } from 'src/app/services/personel-izin.service';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css']
})
export class PersonelListComponent implements OnInit {

  
  personeller: Personel[] = [];

  constructor(
    private personelIzinService: PersonelIzinService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPersonel();
  }

  getPersonel() {
    this.personelIzinService.getPersoneller().subscribe(response => {
      this.personeller = response.data
    })
  }



}
