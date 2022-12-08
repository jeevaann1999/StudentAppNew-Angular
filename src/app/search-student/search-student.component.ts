import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {
  constructor(private api: ApiService, private route: Router) { }
  admno = ""
  searchStudent: any = []
  readValues = () => {
    let data: any = { "admno": this.admno }
    console.log(data)
    this.api.searchStudent(data).subscribe(
      (response: any) => {
        console.log(response)
        if (response.length == 0) {
          alert("Invalid admission number")
        }
        else {
          this.searchStudent = response;
        }
      }
    )
  }
  deleteBtnClick = (id: any) => {
    let data: any = { "id": id }
    this.api.deleteStudent(data).subscribe(
      (generated: any) => {
        console.log(generated)
        if (generated.status == "success") {
          alert("Deleted Successfully")
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}
