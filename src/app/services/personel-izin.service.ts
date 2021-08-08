import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../constants/global-constants';
import { ListResponseModel } from '../models/listResponseModel';
import { Personel } from '../models/personel';
import { PersonelIzin } from '../models/personel-izin';
import { PersonelDto } from '../models/personelDto';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PersonelIzinService {

  apiUrl = GlobalConstants.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }


  add(personelIzin: PersonelIzin): Observable<ResponseModel> {
    let newPath = this.apiUrl + "personelIzinleri/"
    return this.httpClient.post<ResponseModel>(newPath + "add", personelIzin)
  }

  addPersonel(personel:Personel){
    let newPath = this.apiUrl + "personeller/"
    return this.httpClient.post<ResponseModel>(newPath + "add", personel)
  }

  getPersoneller(): Observable<ListResponseModel<Personel>> {
    let newPath = this.apiUrl + "personeller/"
    return this.httpClient.get<ListResponseModel<Personel>>(newPath + "getall");
  }

  getPersonelIzinler(): Observable<ListResponseModel<PersonelIzin>> {
    let newPath = this.apiUrl + "personelIzinleri/"
    return this.httpClient.get<ListResponseModel<PersonelIzin>>(newPath + "getall");
  }

  getPersonelDto(): Observable<ListResponseModel<PersonelDto>>  {
    let newPath = this.apiUrl + "personelIzinleri/";
    return this.httpClient.get<ListResponseModel<PersonelDto>>(newPath + "getpersoneller")
  }

  updatePersonelIzin(personelIzin: PersonelIzin): Observable<ResponseModel>{
    let newPath = this.apiUrl + "personelIzinleri/"
    return this.httpClient.post<ResponseModel>(newPath + "update", personelIzin)
  }

  getByPersonelIzinId(id: number): Observable<SingleResponseModel<PersonelIzin>> {
    let newPath = this.apiUrl + "personelIzinleri/getbyid?id=" + id
    return this.httpClient.get<SingleResponseModel<PersonelIzin>>(newPath)
  }

  personelIzinUpdate(personelIzin: PersonelIzin): Observable<ResponseModel> {
    let newPath = this.apiUrl + "personelIzinleri/"
    return this.httpClient.post<ResponseModel>(newPath + "update", personelIzin)
  }

}
