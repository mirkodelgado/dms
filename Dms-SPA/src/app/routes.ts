import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

import { GateComponent } from './gate/gate.component';

import { RepairComponent } from './repair/repair.component';
import { RepairDashboardComponent } from './repair/repairDashboard.component';
import { RepairFindComponent } from './repair/repairFind.component';
import { RepairNewComponent } from './repair/repairNew.component';
import { RepairProductivityComponent } from './repair/repairProductivity.component';
import { RepairFLCModalComponent } from './repair/repairFLCModal.component';

import { MonitoringComponent } from './monitoring/monitoring.component';

import { AuthGuard } from './_guards/auth.guard';
import { GateDashboardComponent } from './gate/gateDashboard.component';
import { GateAcceptanceComponent } from './gate/gateAcceptance.component';
import { GateBookingComponent } from './gate/gateBooking.component';
import { GateInventoryComponent } from './gate/gateInventory.component';
import { GateFindComponent } from './gate/gateFind.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'gate', component: GateComponent },
            { path: 'repair', component: RepairComponent },
            { path: 'monitoring', component: MonitoringComponent },
        ]
    },

    { path: 'repairDashboard', component: RepairDashboardComponent },
    { path: 'repairFind', component: RepairFindComponent },
    { path: 'repairNew', component: RepairNewComponent },
    { path: 'repairProductivity', component: RepairProductivityComponent },
    { path: 'repairFLCModal', component: RepairFLCModalComponent },

    { path: 'gateDashboard', component: GateDashboardComponent },
    { path: 'gateAcceptance', component: GateAcceptanceComponent },
    { path: 'gateBooking', component: GateBookingComponent },
    { path: 'gateFind', component: GateFindComponent },
    { path: 'gateInventory', component: GateInventoryComponent },

    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
