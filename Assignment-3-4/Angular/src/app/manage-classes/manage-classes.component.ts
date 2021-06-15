import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-manage-classes',
  templateUrl: './manage-classes.component.html',
  styleUrls: ['./manage-classes.component.css']
})
export class ManageClassesComponent implements OnInit {
  data: Record<string, any>[] = [];
  teachers: Record<string, any>[] = [];
  studentsData: Record<string, any>[] = [];

  courseName: string = '';
  courseTeacher: string = '';
  students: string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.fetchClasses();
    this.fetchTeachers();
    this.fetchStudents();
  }

  async fetchClasses(): Promise<void> {
    let response = await axios.get('http://localhost:3000/admin/classes', {responseType: 'json'});
    this.data = response.data;
  }

  async fetchTeachers(): Promise<void> {
    let response = await axios.get('http://localhost:3000/admin/teachers', {responseType: 'json'});
    this.teachers = response.data;
  }

  async fetchStudents(): Promise<void> {
    let response = await axios.get('http://localhost:3000/admin/students', {responseType: 'json'});
    this.studentsData = response.data;
    this.studentsData.forEach((std) => {
      this.students.push(std.name)
    });
  }

  assignClass() {
    axios.post('http://localhost:3000/admin/addclass', {
      "name": this.courseName,
      "teacher": this.getTeacherSid(this.courseTeacher)
    })
  }

  private getTeacherSid(name: string) {
    let sid: string | undefined;

    this.teachers.forEach((teacher) => {
      if (teacher.name == name) {
        sid = teacher.sid;
      }
    });

    return sid
  }

}
