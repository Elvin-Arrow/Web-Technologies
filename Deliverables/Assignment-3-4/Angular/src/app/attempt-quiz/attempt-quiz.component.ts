import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.css']
})
export class AttemptQuizComponent implements OnInit {
  quizNumber: number = -1;
  quizzes: Record<string, any>[] = [];
  answers: string[] = [];
  private students: string[] = [];

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.fetchQuizzes();
    this.quizNumber = parseInt(this.route.snapshot.paramMap.get('qid') ?? '-1');
    console.log(this.quizNumber);
  }

  async fetchQuizzes() {
    let response = await axios.get('http://localhost:3000/student/quizzes', {responseType: "json"})
    this.quizzes = response.data;
  }

  async submitQuiz() {
    let response = await axios.post('http://localhost:3000/student/submitQuiz', {
      quiz: this.quizzes[this.quizNumber]._id,
      student: '60c5e3e979935a93c91c65b3',
      answers: this.answers
    });

    if (response.status == 200) {
      await this.router.navigateByUrl('quizzes')
    }

  }

  private async fetchClasses() {
    let res = await axios.get('http://localhost:3000/admin/classes', {responseType: 'json'});
    return res.data;
  }

  private async populateStudents() {
    let data = await this.fetchClasses()
    data.forEach((course: any) => {
      course.students.forEach((student: any) => {
        this.students.push(student.sid._id)
      })
    })
  }

  private async studentSid() {
    await this.populateStudents();
    return '60c5e3e979935a93c91c65b3'
  }
}
