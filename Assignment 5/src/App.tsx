import './App.css';
import { Route, Switch } from 'react-router-dom';
import  TeacherDashboard  from './components/teacher';
import { AssignQuiz } from './components/teacher/assign-quiz';
import { MarkQuizzes } from './components/teacher/mark-quizzes';
import {LMSDashboard} from './components/dashboard';
import { StudentDashboard } from './components/student';
import { Quizzes } from './components/student/quizzes';


function App() {
  return (
    <div className="App">
      <header>
      
      </header>
      <Switch>
        <Route exact path="/" component={LMSDashboard}></Route>
        <Route exact path="/student" component={StudentDashboard}/>
        <Route path="/student/quizzes" component={Quizzes}/>
        <Route exact path="/teacher" component={TeacherDashboard} />
        <Route path="/teacher/assignquiz" component={AssignQuiz}/>
        <Route path="/teacher/markquizzes" component={MarkQuizzes}></Route>
      </Switch>
    </div>
  );
}

export default App;
