import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchStudent = () => {
    return this.http.get("http://localhost:8080/view")
  }
  addStudent =(dataToSend:any) => {
    return this.http.post("http://localhost:8080/add", dataToSend)
  }
  searchStudent =(dataToSend:any) => {
    return this.http.post("http://localhost:8080/search", dataToSend)
  }
  deleteStudent =(dataToSend:any) => {
    return this.http.post("http://localhost:8080/delete", dataToSend)
  }
}
