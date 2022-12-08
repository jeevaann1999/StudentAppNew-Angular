import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  name = ""
  rollno = ""
  admno = ""
  college = ""
  constructor(private api:ApiService) { }
  readValues = () => {
    let data: any = {
      "name": this.name,
      "rollno": this.rollno,
      "admno": this.admno,
      "college": this.college
    }
    console.log(data)
    this.api.addStudent(data).subscribe(
      (response: any) => {
        console.log(response)
        if (response.status == "success") {
          alert("Student added successfully")
          this.name = ""
          this.rollno = ""
          this.admno = ""
          this.college = ""
        } else {
          alert("something went wrong")
        }
      }
    )
  }
}
