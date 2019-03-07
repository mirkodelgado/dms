import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;

  constructor(private alertify: AlertifyService, private router: Router,
              private route: ActivatedRoute, private authService: AuthService) {
  }

  model: any = {};

  ngOnInit() {
  }

  signIn(form: NgForm) {

      console.log(this.model);

      this.authService.login(this.model).subscribe(next => {
          this.alertify.success('Logged in successfully');
      }, error => {
          this.alertify.error(error);
      }, () => {

          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/home']);
      });

  }

}
