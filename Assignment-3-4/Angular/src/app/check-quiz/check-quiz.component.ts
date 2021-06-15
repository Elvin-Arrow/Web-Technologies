import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-check-quiz',
  templateUrl: './check-quiz.component.html',
  styleUrls: ['./check-quiz.component.css']
})
export class CheckQuizComponent implements OnInit {
  submissions: Record<string, any>[] = [];


  constructor() { }

  ngOnInit(): void {
    this.fetchSubmissions();
  }

  async fetchSubmissions() {
    let response = await axios.get('http://localhost:3000/teacher/quizSubmissions', {responseType: "json"})
    this.submissions = response.data;
  }

  getAnswer(question: number): string {
    let answer: string = '';
    this.submissions.forEach(submission => {
      answer = submission.answers[question];
    });

    return answer;
  }

}
