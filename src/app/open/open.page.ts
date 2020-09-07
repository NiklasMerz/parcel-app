import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './open.page.html',
  styleUrls: ['./open.page.scss'],
})
export class OpenPage implements OnInit {
  public token: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
  }

  scan() {
    // TODO
  }

}
