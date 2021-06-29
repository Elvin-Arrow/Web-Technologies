import { Container } from "@material-ui/core";
import { Component } from "react";
import NavigationBar from "../navbar";

export class AssignQuiz extends Component<{ history: any, location: any, match: any }, {}> {
    constructor(props: { history: any, location: any, match: any }) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <div>
                <NavigationBar screen="teacher" />
                <Container>
                    <h2>Create a new quiz</h2>
                    <form action="">
                        <div className="form-group questions">
                            <label >Quiz title</label>
                            <input type="text" id="title" className="form-control" name="title" />
                        </div>
                        <div className="form-group questions">
                            <label>Score</label>
                            <input type="number" id="score" className="form-control" value="10" name="score" />
                        </div>
                        <div className="questions">
                        <h3>Question </h3>
                        <div className="form-group questions">
                            <label >Question 1</label>
                            <input type="text" id="question" className="form-control" name="question" />
                            <label >Question 2</label>
                            <input type="text" id="question" className="form-control" name="question" />
                            <label >Question 3</label>
                            <input type="text" id="question" className="form-control" name="question" />
                            <label >Question 4</label>
                            <input type="text" id="question" className="form-control" name="question" />
                            <label >Question 5</label>
                            <input type="text" id="question" className="form-control" name="question" />
                        </div>

                        <button className="btn btn-primary">Create quiz</button>
                </div>
            </form>
                </Container>
            </div >
        );
    }
}