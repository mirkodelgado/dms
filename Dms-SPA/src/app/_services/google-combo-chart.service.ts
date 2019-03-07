import { ComboChartConfig } from '../_models/ComboChartConfig';
import { GoogleChartsBaseService } from './google-charts.base.service';
import { Injectable } from '@angular/core';
import { PieChartConfig } from '../_models/PieChartConfig';

declare var google: any;

@Injectable()
export class GoogleComboChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildComboChart(elementId: String, data: any[], config: ComboChartConfig) : void {
    const chartFunc = () => new google.visualization.ComboChart(document.getElementById(<string>elementId));
    const options = {
      title : config.title,
      vAxis: {title: config.vAxis},
      hAxis: {title: config.hAxis},
      seriesType: 'bars'
      };

    this.buildChart(data, chartFunc, options);
  }
}
