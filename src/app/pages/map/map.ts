import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements AfterViewInit {
  @ViewChild('mapCanvas') mapElement: ElementRef;
  chart = {}
  chart2 = {}
  chart3 = {}
  chart4 = {}
  constructor(public confData: ConferenceData, public platform: Platform) { }

  async ngAfterViewInit() {
    this.chart = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Efficiency Optimization by Branch'
      },
      xAxis: {
        categories: [
          'Seattle HQ',
          'San Francisco',
          'Tokyo'
        ]
      },
      yAxis: [{
        min: 0,
        title: {
          text: 'Employees'
        }
      }, {
        title: {
          text: 'Profit (millions)'
        },
        opposite: true
      }],
      legend: {
        shadow: false
      },
      tooltip: {
        shared: true
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Hardik',
        color: 'rgba(165,170,217,1)',
        data: [150, 73, 20],
        pointPadding: 0.3,
        pointPlacement: -0.2
      }, {
        name: 'Karan',
        color: 'rgba(126,86,134,.9)',
        data: [140, 90, 40],
        pointPadding: 0.4,
        pointPlacement: -0.2
      }, {
        name: 'Jainesh',
        color: 'rgba(248,161,63,1)',
        data: [183.6, 178.8, 198.5],
        tooltip: {
          valuePrefix: '$',
          valueSuffix: ' M'
        },
        pointPadding: 0.3,
        pointPlacement: 0.2,
        yAxis: 1
      }, {
        name: 'Sumit',
        color: 'rgba(186,60,61,.9)',
        data: [203.6, 198.8, 208.5],
        tooltip: {
          valuePrefix: '$',
          valueSuffix: ' M'
        },
        pointPadding: 0.4,
        pointPlacement: 0.2,
        yAxis: 1
      }]
    }


    this.chart2 = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in January, 2018'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'BP',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Sugar',
          y: 11.84
        }, {
          name: 'Heartbeat',
          y: 10.85
        }, {
          name: 'Sugar',
          y: 4.67
        }, {
          name: 'Sugar',
          y: 4.18
        }, {
          name: 'Other',
          y: 7.05
        }]
      }]
    }

    this.chart3 = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Historic World Population by Region'
      },
      subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
      }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
      }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
      }, {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
      }]
    }

    this.chart4 = {

      title: {
        text: 'Logarithmic axis demo'
      },

      xAxis: {
        tickInterval: 1,
        type: 'logarithmic'
      },

      yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1
      },

      tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
      },

      series: [{
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        pointStart: 1
      }]
    }

    setTimeout(() => {
      Highcharts.chart('container1', this.chart);
      Highcharts.chart('container2', this.chart2);
      Highcharts.chart('container3', this.chart3);
      Highcharts.chart('container4', this.chart4);
    }, 1000)
  }
}
