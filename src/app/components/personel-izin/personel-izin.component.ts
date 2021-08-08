import { Component, OnInit } from '@angular/core';
import { PersonelIzinService } from 'src/app/services/personel-izin.service';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-personel-izin',
  templateUrl: './personel-izin.component.html',
  styleUrls: ['./personel-izin.component.css']
})
export class PersonelIzinComponent implements OnInit {

  personelIzinAddForm:FormGroup;

  constructor(
    private personelIzinService:PersonelIzinService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createPersonelAddForm();
    
  }

  createPersonelAddForm(){
    this.personelIzinAddForm = this.formBuilder.group({
      id:["",Validators.required],
      personelId:["",Validators.required],
      gidis:["",Validators.required],
      donus:["",Validators.required]
    })
  }

  backToList(){
    this.router.navigate(["personel-izin-list"]);
  }

  add(){
    if(this.personelIzinAddForm.valid){
      let personelModel = Object.assign({},this.personelIzinAddForm.value)
      this.personelIzinService.add(personelModel).subscribe(response=>{
        this.backToList();
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
                   console.log(responseError.error.Errors[i].ErrorMessage);
                   
        }
      }
    })
      
    }else{
      console.log("Form eksik")
    }
    
  }

}
