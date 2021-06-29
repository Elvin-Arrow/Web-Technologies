import { Component } from "react";
import axios from 'axios';
import { Container, Typography, List, ListItem } from "@material-ui/core";
import NavigationBar from "../navbar";

class TeacherDashboard extends Component<{ history: any, location: any, match: any }, { students: Record<string, any>[], className: string }> {


    constructor(props: { history: any, location: any, match: any }) {
        super(props);

        this.state = {
            students: [],
            className: "",
        }
    }


    async componentDidMount() {
        let response = await axios.get('http://localhost:3000/admin/classes', { responseType: 'json' });
        let classes = response.data;

        this.setState({
            students: classes[0].students,
            className: classes[0].name
        });
    }

    public render(): React.ReactNode {
        let stdInfo: any = [];

        this.state.students.forEach(std => {
            stdInfo.push(<ListItem>{std.sid.name}</ListItem>);
            stdInfo.push(<ListItem>{std.sid.rollno}</ListItem>);
        });

        return (
            <>
                <NavigationBar screen="teacher"/>
                <Container>
                    <Typography variant="h3">Welcome to the teacher's Dashboard</Typography>
                    <Typography variant="subtitle1">Course: {this.state.className}</Typography>
                    <Typography variant="h6">Students</Typography>
                    <List>{stdInfo}</List>
                </Container>
            </>
        );
    }
}

export default TeacherDashboard;