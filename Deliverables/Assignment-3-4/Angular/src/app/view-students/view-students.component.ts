import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  public data: Record<string, any>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchStudents();
  }

  async fetchStudents(): Promise<void> {
    let response = await axios.get('http://localhost:3000/admin/students', {responseType: 'json'});
    this.data = response.data;
  }

}
