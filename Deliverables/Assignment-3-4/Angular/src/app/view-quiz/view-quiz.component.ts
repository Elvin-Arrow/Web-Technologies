import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
  quizzes: Record<string, any>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchQuizzes();
  }

  async fetchQuizzes() {
    let response = await axios.get('http://localhost:3000/student/quizzes', {responseType: "json"})
    this.quizzes = response.data;
  }

}
