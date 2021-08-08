import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonelIzinService } from 'src/app/services/personel-izin.service';

@Component({
  selector: 'app-personel-add',
  templateUrl: './personel-add.component.html',
  styleUrls: ['./personel-add.component.css']
})
export class PersonelAddComponent implements OnInit {

  personelAddForm:FormGroup

  ad:string
  soyAd:string
  girisTarihi:Date

   constructor(
    private personelIzinService: PersonelIzinService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.createPersonelAddForm()
  }

  createPersonelAddForm() {
    this.personelAddForm = this.formBuilder.group({
      ad: ["", Validators.required],
      soyAd: ["", Validators.required],
      girisTarihi: ["", Validators.required]
    })
  }

  add() {
    if (this.personelAddForm.valid) {
      let personelModel = Object.assign({}, this.personelAddForm.value)
      this.personelIzinService.addPersonel(personelModel).subscribe(response => {
        this.backToList();
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            console.log("Doğrulama Hatası")
          }
        }
      })

    } else {
      console.log("Form Eksik")
    }

  }
  backToList() {
    this.router.navigate(["personel-list"]);
  }

}
