import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {

        },
        navLink: {
            margin: 25
        },
        linkStyle: {
            color: "aliceblue",
            '&:hover': {
                color: "aquamarine"
            }
        }
    }),
);

export default function ButtonAppBar(props: {screen: string}) {
    const classes = useStyles();
    let component: any;

    if (props.screen === "teacher") {
        component = getTeacherNav(classes);
    } else if (props.screen === "student") {
        component = getStudentNav(classes);
    } else {
        component = getDefaultNav(classes);
    }

    return component;
}


function getTeacherNav(classes: any) {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Learning Management System
                    </Typography>
                    <Typography variant="body1" className={classes.navLink}>
                        <Link className={classes.linkStyle} to="/teacher">Home</Link>
                    </Typography>
                    <Typography variant="body2" className={classes.navLink}>
                        <Link className={classes.linkStyle} to="/teacher/assignquiz">Assign Quiz</Link>
                    </Typography>
                    <Typography variant="body2" className={classes.navLink}>
                        <Link className={classes.linkStyle} to="/teacher/markquizzes" >Mark Quiz</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

function getStudentNav(classes: any) {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Learning Management System
                    </Typography>
                    <Typography variant="body1" className={classes.navLink}>
                        <Link className={classes.linkStyle} to="/student">Home</Link>
                    </Typography>
                    <Typography variant="body2" className={classes.navLink}>
                        <Link className={classes.linkStyle} to="/student/assignments">Assignments</Link>
                    </Typography>
                    <Typography variant="body2" className={classes.navLink}>
                        <Link className={classes.linkStyle} to="/student/quizzes" >Quizzes</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

function getDefaultNav(classes: any) {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Learning Management System
                    </Typography>
                    <Typography variant="body1" className={classes.navLink}>
                        <Link className={classes.linkStyle} to="/">Home</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}