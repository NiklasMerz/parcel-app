import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public token: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
  }

  login() {
    window.open('https://parcel.merz.dev/login');
  }

}
