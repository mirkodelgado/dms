import { GoogleChartsBaseService } from './google-charts.base.service';
import { Injectable } from '@angular/core';
import { PieChartConfig } from '../_models/PieChartConfig';

declare var google: any;

@Injectable()
export class GooglePieChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: String, data: any[], config: PieChartConfig): void {
    const chartFunc = () => new google.visualization.PieChart(document.getElementById(<string>elementId));
    const options = {
            title: config.title,
            pieHole: config.pieHole,
            is3D: config.is3D
      };

    this.buildChart(data, chartFunc, options);
  }
}
