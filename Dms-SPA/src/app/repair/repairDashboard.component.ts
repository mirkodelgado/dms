import { Component, OnInit } from '@angular/core';

import { PieChartConfig } from '../_models/PieChartConfig';
import { ComboChartConfig } from '../_models/ComboChartConfig';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-repairDashboard',
  templateUrl: './repairDashboard.component.html',
  styleUrls: ['./repairDashboard.component.css']
})
export class RepairDashboardComponent implements OnInit {

  title = 'Reusable charts sample';

  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;



  constructor() { }

  ngOnInit() {

    // Piechart1 Data & Config
    this.data1 = [['System Estimate Status', 'Status Summary'],
    ['Open With Warnings', 3],
    ['Open Without Warnings', 2],
    ['Authorized', 5],
    ['Declined', 4],
    ['On Hold', 7],
    ['Completed', 10]];

    // this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
    this.config1 = new PieChartConfig('Estimate Status Summary', 1, true);
    this.elementId1 = 'myPieChart1';

    // Piechart2 Data & Config
    this.data2 = [['System Estimate Status', 'Status Summary'],
                  ['Open With Warnings',     11],
                  ['Open Without Warnings',      2],
                  ['Authorized',  2],
                  ['Declined', 2],
                  ['On Hold',    7]];

    // this.config2 = new PieChartConfig('My Daily Activities at 30 years old', 0.4);
    this.config2 = new PieChartConfig('My Daily Activities at 30 years old', 1, true);
    this.elementId2 = 'myPieChart2';

  }

}
