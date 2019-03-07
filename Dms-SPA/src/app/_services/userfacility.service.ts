import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { FacilityLocation } from './../_models/facilitylocation';
import { FacilityLocationBillTo } from '../_models/facilitylocationbillto';
import { FacilityLocationEquipment } from '../_models/facilitylocationequipment';

@Injectable({
  providedIn: 'root'
})
export class UserfacilityService {

  baseUrl = environment.apiUrl + 'userfacility/';

  userFacilityLocation: FacilityLocation[];
  userFacilityLocationBillTo: FacilityLocationBillTo[];


  facilitylocation: FacilityLocation;
  billto: FacilityLocationBillTo;
  equipment: FacilityLocationEquipment;



  constructor(private http: HttpClient) { }

  getFacilityLocation(user: string) {
    return this.http.get<FacilityLocation[]>(this.baseUrl + user, { observe: 'response' }).pipe(
      map(response => {

        this.userFacilityLocation = response.body;

        console.log('userfacilitylocation: ' + this.userFacilityLocation);

        return this.userFacilityLocation;
        // const user = response;
        // if (user) {
        //  localStorage.setItem('token', user.token);
        //  localStorage.setItem('user', JSON.stringify(user.user));
        //  this.decodedToken = this.jwtHelper.decodeToken(user.token);
        //  this.currentUser = user.user;
        // }
      })
    );
  }

  getFacilityLocationBillTos(user: string, vendor: number, depot: number) {
    return this.http.get<FacilityLocationBillTo[]>(this.baseUrl + 'getbilltos/' + user + '/' + vendor + '/' + depot,
        { observe: 'response' }).pipe(map(response => {

        this.userFacilityLocationBillTo = response.body;

        console.log('userfacilitylocationBillTo: ' + this.userFacilityLocationBillTo);

        return this.userFacilityLocationBillTo;

      })
    );
  }

  setFL(facilitylocation: FacilityLocation): void {
    this.facilitylocation = facilitylocation;

    localStorage.setItem('facilitylocation', JSON.stringify(this.facilitylocation));

  }

  getFL(): FacilityLocation {

    this.facilitylocation = JSON.parse(localStorage.getItem('facilitylocation'));

    return this.facilitylocation;
  }

  getFacilityName(): string {

    this.facilitylocation = JSON.parse(localStorage.getItem('facilitylocation'));

    const facility = this.facilitylocation.facilityLocationName.split('/');
    return facility[0];
  }

  getLocationName(): string {

    this.facilitylocation = JSON.parse(localStorage.getItem('facilitylocation'));

    const location = this.facilitylocation.facilityLocationName.split('/');
    return location[1];
  }

  setBillTo(billto: FacilityLocationBillTo): void {
    this.billto = billto;

    localStorage.setItem('billto', JSON.stringify(this.billto));

  }

  getBillto(): FacilityLocationBillTo {

    this.billto = JSON.parse(localStorage.getItem('billto'));

    return this.billto;
  }

  getBilltoName(): string {

    this.billto = JSON.parse(localStorage.getItem('billto'));

    return this.billto.billToClientName;
  }

  getBilltoTariffID(): number {

    this.billto = JSON.parse(localStorage.getItem('billto'));

    return this.billto.tariffID;
  }

  setEquipment(equipment: FacilityLocationEquipment): void {
    this.equipment = equipment;

    localStorage.setItem('equipment', JSON.stringify(this.equipment));
  }

  getEquipment(): FacilityLocationEquipment {

    this.equipment = JSON.parse(localStorage.getItem('equipment'));

    return this.equipment;
  }

  getEquipmentName(): string {

    this.equipment = JSON.parse(localStorage.getItem('equipment'));

    return this.equipment.equipmentName + ' Estimate';
  }

  getEquipmentNsiType(): number {

    this.equipment = JSON.parse(localStorage.getItem('equipment'));

    return this.equipment.equipmentNsiType;
  }

}
