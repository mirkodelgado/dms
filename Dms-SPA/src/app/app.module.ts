import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsDropdownModule, TabsModule, BsDatepickerModule, TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';

import { GateComponent } from './gate/gate.component';
import { GateDashboardComponent } from './gate/gateDashboard.component';
import { GateAcceptanceComponent } from './gate/gateAcceptance.component';
import { GateBookingComponent } from './gate/gateBooking.component';
import { GateFindComponent } from './gate/gateFind.component';
import { GateInventoryComponent } from './gate/gateInventory.component';

import { RepairComponent } from './repair/repair.component';
import { RepairDashboardComponent } from './repair/repairDashboard.component';
import { RepairFindComponent } from './repair/repairFind.component';
import { RepairNewComponent } from './repair/repairNew.component';
import { RepairProductivityComponent } from './repair/repairProductivity.component';
import { RepairFLCModalComponent } from './repair/repairFLCModal.component';

import { MonitoringComponent } from './monitoring/monitoring.component';
import { LoginComponent } from './login/login.component';

import { ErrorInterceptorProvider } from './_services/error.interceptor';

import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';
import { UserfacilityService } from './_services/userfacility.service';
import { GoogleComboChartService } from './_services/google-combo-chart.service';
import { GooglePieChartService } from './_services/google-pie-chart.service';

import { AuthGuard } from './_guards/auth.guard';
import { ContactComponent } from './contact/contact.component';

import { ComboChartComponent } from './_charts/combochart.component';
import { PieChartComponent } from './_charts/piechart.component';

@NgModule({
   declarations: [
      AppComponent,
      NavmenuComponent,
      HomeComponent,

      GateComponent,
      GateDashboardComponent,
      GateAcceptanceComponent,
      GateBookingComponent,
      GateInventoryComponent,
      GateFindComponent,

      RepairComponent,
      RepairDashboardComponent,
      RepairFindComponent,
      RepairNewComponent,
      RepairProductivityComponent,
      RepairFLCModalComponent,

      MonitoringComponent,
      LoginComponent,
      ContactComponent,

      ComboChartComponent,
      PieChartComponent

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ModalModule.forRoot(),
      BsDatepickerModule.forRoot(),
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      TooltipModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AlertifyService,
      AuthService,
      UserfacilityService,

      GoogleComboChartService,
      GooglePieChartService,

      ErrorInterceptorProvider,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
