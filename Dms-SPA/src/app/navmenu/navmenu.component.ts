import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  modalRef: BsModalRef;

  navbarOpen = false;

  config = {
    animated: true
  };

  crDate = new Date().getFullYear();      // get current year for footer copyright

  constructor(private modalService: BsModalService, private alertify: AlertifyService,
              private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  isLoggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
