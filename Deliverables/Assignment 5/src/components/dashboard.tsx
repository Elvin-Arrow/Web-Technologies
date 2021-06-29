import { Box, Button, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import NavigationBar from "./navbar";

export class LMSDashboard extends React.Component<{ history: any, location: any, match: any }, {}> {

    public render(): React.ReactNode {
        return (
            <>
                <NavigationBar screen="default" />
                <Container>
                    <Typography variant="h4">Continue as</Typography>
                    
                    <Box flex={1}>
                        <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/student') }}>Student</Button>
                        <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/teacher') }}>Teacher</Button>
                    </Box>

                    
                    
                </Container>
            </>
        );
    }
}
