import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

interface Quiz {
    title: string,
    score: number,
    stdName: string,
    stdRegNo: string,
    questions: string[],
    answers: string[]
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 500
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function AssignmentCard(props: { quizzes: Record<string, any>[] }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    let items: any = [];

    props.quizzes.forEach(quiz => {
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {quiz.title}
                </Typography>
                <Typography variant="h5" component="h2">
                    
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <TextField required id="standard-basic" label="Score" />
                <Button size="small" color="primary" variant="contained">Submit</Button>
            </CardActions>
        </Card>
    })



    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <TextField required id="standard-basic" label="Score" />
                <Button size="small" color="primary" variant="contained">Submit</Button>
            </CardActions>
        </Card>
    );
}