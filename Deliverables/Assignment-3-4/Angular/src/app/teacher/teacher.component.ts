import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  data: Record<string, any>[] = [];
  students: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchClasses();
    this.populateStudents();
  }

  async fetchClasses(): Promise<void> {
    let response = await axios.get('http://localhost:3000/admin/classes', {responseType: 'json'});
    this.data = response.data;
  }

  get courseName() {
    let name: string = '';
    this.data.forEach(course => {
      name = course.name
    })

    return name;
  }

  private populateStudents() {
    this.data.forEach(course => {
      course.students.forEach((student: any) => {
        this.students.push(student.sid.name)
      })
    })
  }
}
