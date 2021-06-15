import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.css']
})
export class ManageTeachersComponent implements OnInit {
  data: Record<string, any>[] = [];

  name: string = '';
  designation: string = '';
  errMessage: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fetchTeachers();
  }

  async fetchTeachers(): Promise<void> {
    let response = await axios.get('http://localhost:3000/admin/teachers', {responseType: 'json'});
    this.data = response.data;
  }

  async addTeacher() {
    if (this.name != '') {
      let response = await axios.post('http://localhost:3000/admin/addteacher', {
        "name": this.name,
        "designation": this.designation
      });

      if (response.status == 200) {
        this.name = '';
        this.designation = '';
        this.router.navigateByUrl('admin').then(() => {
          this.router.navigateByUrl('admin/manage-teachers');
        })

      } else {
        this.errMessage = 'Failed to add teacher'
      }
    }

  }

}
