import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  data: any;
  id: any;
  teacher: any;

  constructor(private http : HttpClient) { }

  getTeachersList(url) {
    return this.http.get(`${API_URL}/${url}`);
  }
}
