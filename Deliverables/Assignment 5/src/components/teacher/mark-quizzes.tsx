import { Box } from "@material-ui/core";
import axios from "axios";
import { Component } from "react";

import NavigationBar from "../navbar";

export class MarkQuizzes extends Component<{ history: any, location: any, match: any }, { submissions: Record<string, any>[] }> {

    constructor(props: { history: any, location: any, match: any }) {
        super(props);

        this.state = {
            submissions: []
        }
    }

    async componentDidMount() {
        let response = await axios.get('http://localhost:3000/teacher/quizSubmissions', { responseType: "json" });

        this.setState({
            submissions: response.data
        })

    }

    public render(): React.ReactNode {
        let items: any = [];
        let questions: any = [];

        let i = 0;
        this.state.submissions.forEach(submission => {
            submission.quiz.questions.forEach((question: any) => {
                questions.push(
                    <>
                        <h4>Question: {i + 1}</h4>
                        <p>{question}</p>
                        <h5>Answer</h5>
                        <p>{submission.answers[i]}</p>
                    </>
                );
            });
            i++;
        });

        i = 0;
        this.state.submissions.forEach(submission => {
            i++;
            items.push(
                <Box display="flex" flexDirection="row">
                    <div className="container">
                        <div className="submission">
                            <h2>{submission.quiz.title}</h2>
                            <h4>Student: {submission.student.name}</h4>
                            {this.questions(submission.quiz.questions, submission.answers)}
                            <div className="form-group">
                                <label>Score</label>
                                <input type="number" className="form-control" id="score" placeholder="Out of 10" />
                            </div>
                        </div >
                    </div >
                </Box>
            );
        });

        return (
            <>
                <NavigationBar screen="teacher"/>
                <h1>Mark quizzes</h1>
                {items}

            </>
        );
    }

    private questions(questions: [], answers: []): React.ReactNode {
        let submission: any = [];

        let i = 0;
        questions.forEach(question => {
            submission.push(
                <>
                    <h4>Question: {i + 1}</h4>
                    <p>{question}</p>
                    <h5>Answer</h5>
                    <p>{answers[i]}</p>
                </>
            );
            i++;
        });

        return submission;
    }
}