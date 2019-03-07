import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalRef } from 'ngx-bootstrap';

import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { UserfacilityService } from '../_services/userfacility.service';

import { FacilityLocation } from './../_models/facilitylocation';
import { FacilityLocationBillTo } from './../_models/facilitylocationbillto';
import { FacilityLocationEquipment } from './../_models/facilitylocationequipment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-repairFLCModal',
  templateUrl: './repairFLCModal.component.html',
  styleUrls: ['./repairFLCModal.component.css']
})

export class RepairFLCModalComponent implements OnInit, AfterViewInit {

  title: string;
  closeBtnName: string;

  facilitylocations: FacilityLocation[];
  billtos: FacilityLocationBillTo[];
  equipmenttypes: FacilityLocationEquipment[];

  // facilitylocations = [
  //  { facility: 0, location: 0, name: 'Select' },
  //  { facility: 100, location: 100, name: 'ABCD' },
  //  { facility: 100, location: 200, name: 'EFGH' },
  //  { facility: 100, location: 300, name: 'IJKL' }
  // ];

  selectedfacilitylocation: FacilityLocation;
  selectedbillto: FacilityLocationBillTo;
  selectedequipment: FacilityLocationEquipment;

  constructor(private authService: AuthService, private userfacilityService: UserfacilityService,
              private alertify: AlertifyService, private router: Router, public bsModalRef: BsModalRef) { }

  ngOnInit() {

    this.userfacilityService.getFacilityLocation(this.authService.getUsername())
        .subscribe(
        (res: FacilityLocation[]) => {
          this.facilitylocations = res;

          this.facilitylocations.unshift({ facilityID: 0, locationID: 0, facilityLocationName: 'Select' });
          this.selectedfacilitylocation = this.facilitylocations[0];

        },
        error => {
          this.alertify.error(error);
        }
    );

  }

  ngAfterViewInit() {

    this.resetBillToDropDown();

    this.resetEquipmentDropDown();
  }




  facilitylocationselected(): void {

    console.log(this.selectedfacilitylocation);

     if (this.selectedfacilitylocation.facilityID === 0) {

        this.alertify.error('Please select facility/location');

        this.resetBillToDropDown();
        this.resetEquipmentDropDown();
        // this.billtos = [];          // reset bill to
        // this.equipmenttypes = [];   // reset equipment

     } else {

      this.userfacilityService.getFacilityLocationBillTos(this.authService.getUsername(), this.selectedfacilitylocation.facilityID,
      this.selectedfacilitylocation.locationID)
        .subscribe(
        (res: FacilityLocationBillTo[]) => {
          this.billtos = res;

          this.billtos.unshift({ billToClientID: 0, billToClientName: 'Select', tariffID: 0,
                                 isChassis: false, isDryBox: false, isReefer: false, isGenset: false,
                                 ohChassis: false, ohDryBox: false, ohReefer: false, ohGenset: false });
          this.selectedbillto = this.billtos[0];
        },
        error => {
          this.alertify.error(error);
        }
      );

     }
  }


  billtoselected(): void {

    console.log(this.selectedbillto);

    if (this.selectedbillto.billToClientID === 0) {

      this.alertify.error('Please select Bill To Client');

      this.resetEquipmentDropDown();
      // this.equipmenttypes = [];   // reset equipment

    } else {

      console.log('tarriff ID: ' + this.selectedbillto.tariffID);

      this.equipmenttypes = new Array<FacilityLocationEquipment>();

      this.equipmenttypes.push({ equipmentNsiType: 0, equipmentName: 'Select' });

      if (this.selectedbillto.isChassis) {
        this.equipmenttypes.push({ equipmentNsiType: 1, equipmentName: 'In Service Chassis' });
      }

      if (this.selectedbillto.isDryBox) {
        this.equipmenttypes.push({ equipmentNsiType: 2, equipmentName: 'In Service Dry Container' });
      }

      if (this.selectedbillto.isReefer) {
        this.equipmenttypes.push({ equipmentNsiType: 3, equipmentName: 'In Service Reefer' });
      }

      if (this.selectedbillto.isGenset) {
        this.equipmenttypes.push({ equipmentNsiType: 4, equipmentName: 'In Service Genset' });
      }

      if (this.selectedbillto.ohChassis) {
        this.equipmenttypes.push({ equipmentNsiType: 5, equipmentName: 'Off Hire Chassis' });
      }

      if (this.selectedbillto.ohDryBox) {
        this.equipmenttypes.push({ equipmentNsiType: 6, equipmentName: 'Off Hire Dry Container' });
      }

      if (this.selectedbillto.ohReefer) {
        this.equipmenttypes.push({ equipmentNsiType: 7, equipmentName: 'Off Hire Reefer' });
      }

      if (this.selectedbillto.ohGenset) {
        this.equipmenttypes.push({ equipmentNsiType: 8, equipmentName: 'Off Hire Genset' });
      }

      this.selectedequipment = this.equipmenttypes[0];
    }
  }

  equipmentselected(): void {

    console.log(this.selectedequipment);

    if (this.selectedequipment.equipmentNsiType === 0) {

      this.alertify.error('Please select Equipment');
    }
  }

  resetBillToDropDown(): void {

    this.billtos = new Array<FacilityLocationBillTo>();

    this.billtos.push({ billToClientID: 0, billToClientName: 'Select', tariffID: 0,
                        isChassis: false, isDryBox: false, isReefer: false, isGenset: false,
                        ohChassis: false, ohDryBox: false, ohReefer: false, ohGenset: false });

    this.selectedbillto = this.billtos[0];
  }


  resetEquipmentDropDown(): void {

    this.equipmenttypes = new Array<FacilityLocationEquipment>();

    this.equipmenttypes.push({ equipmentNsiType: 0, equipmentName: 'Select' });
    this.selectedequipment = this.equipmenttypes[0];
  }

  startEstimate(): void {

    if (this.selectedfacilitylocation.facilityID === 0) {
      this.alertify.error('Please select facility/location');
    }

    if (this.selectedbillto.billToClientID === 0) {
      this.alertify.error('Please select Bill To Client');
    }

    if (this.selectedequipment.equipmentNsiType === 0) {
      this.alertify.error('Please select Equipment');
    }

    this.bsModalRef.hide();

    this.userfacilityService.setFL(this.selectedfacilitylocation);
    this.userfacilityService.setBillTo(this.selectedbillto);
    this.userfacilityService.setEquipment(this.selectedequipment);

    this.router.navigate(['/repairNew']);

  }

}
