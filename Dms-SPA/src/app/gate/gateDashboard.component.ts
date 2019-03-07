import { Component, OnInit } from '@angular/core';

import { PieChartConfig } from '../_models/PieChartConfig';
import { ComboChartConfig } from '../_models/ComboChartConfig';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-gateDashboard',
  templateUrl: './gateDashboard.component.html',
  styleUrls: ['./gateDashboard.component.css']
})
export class GateDashboardComponent implements OnInit {

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
    this.data1 = [['In Gates', 'Daily In Gate Count By Vendor'],
                  ['Hapag', 10],
                  ['ACL', 10],
                  ['APL', 10],
                  ['COSCO', 10],
                  ['ZIM', 10],
                  ['Maersk', 10],
                  ['Trac',  10],
                  ['GCCP', 10],
                  ['DCLI', 10],
                  ['Evergreen', 10]];

    // this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
    this.config1 = new PieChartConfig('In Gate Count By Vendor', 1, true);
    this.elementId1 = 'myPieChart1';

    // Piechart2 Data & Config
    this.data2 = [['Out Gates', 'Daily Out Gate Count By Vendor'],
                  ['Hapag', 10],
                  ['ACL', 10],
                  ['APL', 10],
                  ['COSCO', 10],
                  ['ZIM', 10],
                  ['Maersk', 10],
                  ['Trac',  10],
                  ['GCCP', 10],
                  ['DCLI', 10],
                  ['Evergreen', 10]];


    // this.config2 = new PieChartConfig('My Daily Activities at 30 years old', 0.4);
    this.config2 = new PieChartConfig('Out Gate Count By Vendor', 1, true);
    this.elementId2 = 'myPieChart2';

  }

}
