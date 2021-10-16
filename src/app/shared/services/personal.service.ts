import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Personal } from '../interfaces/stdent.interfaces';
@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  constructor(private http: HttpClient) { }

  getPersonals(): Promise<Personal[]> {
    return this.http.get<Personal[]>(`${environment.apiUrl}/personal`).toPromise();
  }

  postPersonal(data: Personal) : Promise<Personal> {
    return this.http.post<Personal>(`${environment.apiUrl}/personal`, data).toPromise();
  }

  getPersonal(id: number): Promise<Personal> {
    return this.http.get<Personal>(`${environment.apiUrl}/personal/${id}`).toPromise();
  }

  putPersonal(id: number, data: Personal): Promise<any> {
    return this.http.put(`${environment.apiUrl}/personal/${id}`, data).toPromise();
  }

  deletePersonal(id: number): Promise<any> {
    return this.http.delete(`${environment.apiUrl}/personal/${id}`).toPromise();
  }

}
