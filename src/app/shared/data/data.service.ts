import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { FileList } from '../model/list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoints = {
    picture: '/pictures'
  };

  constructor(private http: HttpClient) {
  }

  getPictureList(): Observable<FileList> {
    return this.http.get<FileList>(environment.url + this.endpoints.picture);
  }
}
