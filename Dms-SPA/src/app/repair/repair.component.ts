import { Component, OnInit } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { RepairFLCModalComponent } from './repairFLCModal.component';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  bsModalRef: BsModalRef;

  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openFLCModal() {
    console.log('FLC Modal');

    this.bsModalRef = this.modalService.show(RepairFLCModalComponent, this.config);
    this.bsModalRef.content.closeBtnName = 'Start Estimate';
  }

}
