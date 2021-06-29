import { Component, OnInit } from '@angular/core';
import {Quiz} from "../models/quiz";
import axios from "axios";

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  questions: number[] = [];
  quiz: Quiz = new Quiz();
  options = [0, 1, 2, 3];
  count = 0;
  constructor() { }

  ngOnInit(): void {
    this.questions.push(this.count);
  }

  addQuestion(): void {
    this.count++;
    this.questions.push(this.count);
  }

  async createQuiz() {
    let response = await axios.post('http://localhost:3000/teacher/addquiz', this.quiz.toRecord())

  }

}
