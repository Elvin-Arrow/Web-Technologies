import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  data: Record<string, any>[] = [];
  constructor() { }

  ngOnInit(): void {
    this.fetchClasses();
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

}
