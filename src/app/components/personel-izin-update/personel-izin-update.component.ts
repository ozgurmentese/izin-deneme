import { Component, OnInit } from '@angular/core';
import { PersonelIzinService } from 'src/app/services/personel-izin.service';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { PersonelIzin } from 'src/app/models/personel-izin';
@Component({
  selector: 'app-personel-izin-update',
  templateUrl: './personel-izin-update.component.html',
  styleUrls: ['./personel-izin-update.component.css']
})
export class PersonelIzinUpdateComponent implements OnInit {

  personelIzinUpdateForm: FormGroup;
  personelIzin: PersonelIzin;
  id: number
  personelId: number
  gidis: Date
  donus: Date

  constructor(
    private personelIzinService: PersonelIzinService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getByPersonelIzinId(params["id"])
        this.createPersonelIzinAddForm();
      }
    })
  }

  update() {
    if (this.personelIzinUpdateForm.valid) {
      let personelIzinModel = Object.assign({}, this.personelIzinUpdateForm.value)
      this.personelIzinService.personelIzinUpdate(personelIzinModel).subscribe(respose => {
        this.backToList();
      }, responseError => {
        console.log("Hata Oluştu")
      })

    }
    else {
      console.log("Form Eksik")
    }
  }
  createPersonelIzinAddForm() {
    this.personelIzinUpdateForm = this.formBuilder.group({
      id: ["", Validators.required],
      personelId: ["", Validators.required],
      gidis: ["", Validators.required],
      donus: ["", Validators.required]
    })
  }

  backToList() {
    this.router.navigate(["personel-izin-list"]);
  }

  getByPersonelIzinId(id: number) {
    this.personelIzinService.getByPersonelIzinId(this.activatedRoute.snapshot.params["id"]).subscribe(response => {
      this.personelIzin = response.data
      this.id = this.personelIzin.id
      this.personelId = this.personelIzin.personelId
      this.donus = this.personelIzin.donus
      this.gidis = this.personelIzin.gidis
    })
  }



}
