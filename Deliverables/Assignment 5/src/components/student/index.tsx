import React from "react";
import NavigationBar from "../navbar";

export class StudentDashboard extends React.Component<{}, {}> {
    async componentDidMount() {
        
    }

    public render(): React.ReactNode {
        return (
            <>  
                <NavigationBar screen="student"/>
                <h1>Welcome to student dashboard</h1>
            </>
        );
    }
}