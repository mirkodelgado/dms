import { Component, OnInit, ViewChild } from '@angular/core';

import { AlertifyService } from '../_services/alertify.service';
import { UserfacilityService } from '../_services/userfacility.service';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-repairNew',
  templateUrl: './repairNew.component.html',
  styleUrls: ['./repairNew.component.css']
})
export class RepairNewComponent implements OnInit {

  constructor(private userfacilityService: UserfacilityService, private alertify: AlertifyService) { }

  currDate = new Date();      // get current datetime for input date

  equipTypeEstimate: string;
  facilityName: string;
  locationName: string;
  issuedBy: string;
  billToName: string;

  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  value: string;
  id: string;

  ngOnInit() {
    this.equipTypeEstimate = this.userfacilityService.getEquipmentName();
    this.facilityName = this.userfacilityService.getFacilityName();
    this.locationName = this.userfacilityService.getLocationName();
    this.billToName = this.userfacilityService.getBilltoName();

    this.staticTabs.tabs[0].active = true;

  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }


  onSelect(data: TabDirective): void {
    this.value = data.heading;
    this.id = data.id;

    console.log('value: ' + this.value);
    console.log('id: ' + this.id);
  }

  isChassis(): boolean {

    if (this.userfacilityService.getEquipmentNsiType() === 1 ||
        this.userfacilityService.getEquipmentNsiType() === 4)
    {
      return true;
    }

    return false;
  }

  isContainer(): boolean {

    if (this.userfacilityService.getEquipmentNsiType() === 2 ||
        this.userfacilityService.getEquipmentNsiType() === 6)
    {
      return true;
    }

    return false;
  }


}
