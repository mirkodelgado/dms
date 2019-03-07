import { Component, Input, OnInit } from '@angular/core';

import { PieChartConfig } from '../_models/PieChartConfig';

import { GooglePieChartService } from '../_services/google-pie-chart.service';

declare var google: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './piechart.component.html'
})
export class PieChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: PieChartConfig;
    @Input() elementId: String;

    constructor(private _pieChartService: GooglePieChartService) {}

    ngOnInit(): void {
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
    }
}
