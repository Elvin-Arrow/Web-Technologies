import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../models/user";
import axios from "axios";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = new User();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  async login() {
    // Consume express API
    let response = await axios.get('http://localhost:3000/login', {
      params: {
        "username": this.user.username,
        "password": this.user.password
      }
    })

    if (response.data.authenticated) {
      if (response.data.user == 'admin') this.router.navigateByUrl('admin');
      else if (response.data.user == 'teacher') this.router.navigateByUrl('teacher');
      else if (response.data.user == 'student') this.router.navigateByUrl('student');
      // Display appropriate route


    }

  }

}
