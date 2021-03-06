import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { NavigationComponent } from './navigation/navigation.component';
import {FormsModule} from "@angular/forms";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CheckQuizComponent } from './check-quiz/check-quiz.component';
import { AttemptQuizComponent } from './attempt-quiz/attempt-quiz.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { ViewQuizComponent } from './view-quiz/view-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    AdminComponent,
    TeacherComponent,
    ManageStudentsComponent,
    ManageTeachersComponent,
    ManageClassesComponent,
    ViewStudentsComponent,
    AddStudentsComponent,
    NavigationComponent,
    CheckQuizComponent,
    AttemptQuizComponent,
    CreateQuizComponent,
    ViewQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
