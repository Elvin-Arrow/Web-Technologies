import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {AdminComponent} from "./admin/admin.component";
import {ManageStudentsComponent} from "./manage-students/manage-students.component";
import {ManageTeachersComponent} from "./manage-teachers/manage-teachers.component";
import {ManageClassesComponent} from "./manage-classes/manage-classes.component";
import {ViewStudentsComponent} from "./view-students/view-students.component";
import {CreateQuizComponent} from "./create-quiz/create-quiz.component";
import {AttemptQuizComponent} from "./attempt-quiz/attempt-quiz.component";
import {CheckQuizComponent} from "./check-quiz/check-quiz.component";
import {ViewQuizComponent} from "./view-quiz/view-quiz.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student', component: StudentComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/manage-students', component: ManageStudentsComponent},
  {path: 'admin/manage-teachers', component: ManageTeachersComponent},
  {path: 'admin/manage-classes', component: ManageClassesComponent},
  {path: 'admin/manage-students/view-students', component: ViewStudentsComponent},
  {path: 'teacher/create-quiz', component: CreateQuizComponent},
  {path: 'teacher/check-quiz', component: CheckQuizComponent},
  {path: 'student/attempt-quiz/:qid', component: AttemptQuizComponent},
  {path: 'student/quizzes', component: ViewQuizComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
