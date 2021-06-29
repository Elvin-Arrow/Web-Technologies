import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Student} from "../models/student_model";
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
  student: Student = new Student();

  errMessage = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  async addStudent() {
    if (this.student.name != '') {
      let response = await axios.post('http://localhost:3000/admin/addstudent', {
        "name": this.student.name,
        "rollno": this.student.registrationNumber
      });

      if (response.status == 200) {
        this.student.name = '';
        this.student.registrationNumber = '';
        this.router.navigateByUrl('admin').then(() => {
          this.router.navigateByUrl('admin/manage-students');
        })

      } else {
        this.errMessage = 'Failed to add student'
      }
    }

  }

}
