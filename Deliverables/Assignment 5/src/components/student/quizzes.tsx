import { Button } from "@material-ui/core";
import axios from "axios";
import React from "react";
import NavigationBar from "../navbar";

export class Quizzes extends React.Component<{}, { quizzes: Record<string, any>[], currentQuiz: number }> {
    constructor(props: {}) {
        super(props);

        this.state = {
            quizzes: [],
            currentQuiz: -1,
        }
    }

    async componentDidMount() {
        let response = await axios.get('http://localhost:3000/student/quizzes', { responseType: "json" })
        this.setState({
            quizzes: response.data
        });
    }

    public render() {
        let content: any;

        if (this.state.currentQuiz >= 0) {
            // Render quiz
            content = this.quiz;
        } else {
            // Render dashboard
            content = this.dashboard;
        }

        return content;
    }

    private attemptQuiz(index: number): void {
        this.setState({
            currentQuiz: index
        })
    }

    private async submitQuiz() {
        this.setState({currentQuiz: -1});

    }

    private get dashboard() {
        let i = -1;
        let items: any = [];

        this.state.quizzes.forEach(quiz => {
            items.push(
                <tr>
                    <td>{i + 1}</td>
                    <td>{quiz.title}</td>
                    <td>{quiz.score}</td>
                    <td><Button variant="contained" color="primary" onClick={() => { this.attemptQuiz(i) }}>Attempt quiz</Button></td>
                </tr>
            );
            i++;
        })
        return (
            <>
                <NavigationBar screen="student" />
                <h1>Quizzes</h1>
                <div className="container">
                    <div className="quiz-container">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <td>Sr.no</td>
                                    <td>Title</td>
                                    <td>Score</td>
                                    <td></td>
                                </tr>

                            </thead>
                            <tbody>
                                {items}
                            </tbody>
                        </table>
                    </div>

                    <button className="btn btn-primary" >Submit quiz</button>
                </div>
            </>
        );
    }

    private get quiz() {
        let items: any = [];
        let i = 0;

        console.info(`Quiz number: ${this.state.currentQuiz}`);
        console.info(`Quizzes: ${this.state.quizzes}`);

        this.state.quizzes[this.state.currentQuiz].questions.forEach((question: any) => {
            items.push(
                <>
                    <h4>Question: { i+ 1}</h4>
                    <p>{ question }</p>
                    <div className="form-group">
                        <label>Answer</label>
                        <input type="text" name="answer" id="answer" className="form-control" />
                    </div>
                </>
            );

            i++;
        });

        return (
            <>
                <h2>{this.state.quizzes[this.state.currentQuiz].title}</h2>
                <p>Score: {this.state.quizzes[this.state.currentQuiz].score}</p>
                {items}
                <button className="btn btn-primary" onClick={() => {this.submitQuiz()}}>Submit quiz</button>

            </>
        );
    }
}

/*
<tr *ngFor="let quiz of quizzes; let i = index">
                                <td>{{ i + 1}}</td>
                                <td>{{ quiz.title }}</td>
                                <td>{{ quiz.score }}</td>
                                <td><a routerLink="/student/attempt-quiz/{{i}}">Attempt quiz</a></td>
            </tr>
 */