import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { ILineChart } from 'src/app/model/chart/chart-line';
import { StudentService } from 'src/app/service/student.service';
import { DashboardChart } from 'src/app/model/dashboard-chart';

import { MatSliderModule } from '@angular/material/slider';




var dataSeriesDeposit;

dataSeriesDeposit = [{
  name: 'City Corporation',
  data: [42542, 565612, 554125, 954785, 754896, 825412, 426541, 326541, 836654, 93654, 554698, 923654]
}, {
  name: 'Government',
  data: [50042, 365412, 1254125, 654785, 154896, 125412, 326541, 126541, 1236654, 123654, 1254698, 123654]
},
{
  name: 'NGO',
  data: [542, 365412, 1245, 654785, 852, 125412, 3256, 126541, 12364, 123654, 1254698, 123654]
}
];


var dataSeriesPayment;

dataSeriesPayment = [
  {
  name: 'Furniture',
  data: [12542, 55412, 456, 456, 754896, 456, 426541, 456, 456, 93654, 456, 923654]
  }, {
  name: 'Salary',
  data: [500542, 365412, 12525, 456, 154896, 125412, 326541, 456456, 1236654, 123654, 456, 123654]
},
{
  name: 'Sports',
  data: [600542, 565412, 155125, 456, 754896, 825412, 426541, 454, 836654, 93654, 456, 456456]
  }, {
  name: 'Tiffin',
  data: [500542, 365412, 12525, 456, 154896, 125412, 326541, 126541, 1236654, 123654, 12698, 12364]
},
{
  name: 'Stationary',
  data: [600542, 565412, 456, 456, 754896, 825412, 426541, 326541, 456, 93654, 554698, 923654]
  }, {
  name: 'School Tour',
  data: [500542, 365412, 125412, 4785, 1546, 1252, 36541, 126541, 126654, 12354, 12598, 12354]
}
];

var peiChartDataCashInflow = [{
  name: 'City Corporaiton',
  y: 30.00,
  sliced: true,
  selected: true
}, {
  name: 'Government ',
  y: 25.00
}, {
  name: 'NGO',
  y: 15.00
}, {
  name: 'Student Fees',
  y: 10.5
}, {
  name: 'Directors',
  y: 9.5
}, {
  name: 'External Funds',
  y: 5.00
}, {
  name: 'Donar Agencies',
  y: 3.0
}, {
  name: 'Refund of Investment',
  y: 1.5
}, {
  name: 'Other',
  y: 0.5
}];

var peiChartDataCashOutflow = [{
  name: 'Salary',
  y: 54.00,
  sliced: true,
  selected: true
}, {
  name: 'Furniture ',
  y: 15.84
}, {
  name: 'Sports',
  y: 5.16
}, {
  name: 'Tiffin',
  y: 5.67
}, {
  name: 'Programs',
  y: 3.33
}, {
  name: 'Stationary',
  y: 10.50
}, {
  name: 'Travelling',
  y: 0.5
}, {
  name: 'Construction',
  y: 1.5
}, {
  name: 'Bonus',
  y: 3.5
}];


@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.css']
})
export class FinanceDashboardComponent implements OnInit {
 
  public ratio: any;
  sel='Select';
  years: DashboardChart[];
  options: object;
  paymentOptions_Chart: object;
  cashout_PieChart :object;
  cashin_PieChart :object;
  constructor(private studentService: StudentService) {
    
  }

  highchartsDefs() {
    this.getCashInflowInformation(this.sel);
  }


  h: DashboardChart;

  ngOnInit() {
    this.getEducationYears();
  }

  
  getEducationYears(){
    this.studentService.getEducationYears()
    .subscribe((data)=>{
      this.years=(data as any);
      console.log(this.years[1]);

    })
  }

  
  showPieChart(){
    console.log(this.sel);

    this.getCashInflowInformation(this.sel);


    this.getCashOutflowInformation(this.sel);

    this.generateCashInflowPieChart(this.sel);

    this.generateCashOutflowPieChart(this.sel);


  } 

  getCashInflowInformation(sel): any {      
        this.options = {
          chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 1,
          plotBorderColor: '#345600',
          plotShadow: false,
          type: 'line'
        },
        title: {
            text: 'Monthly Cash <b> Inflow </b>'
        },
        subtitle: {
            text: 'Source: Aparnacharan Balika Ucchaya Bidyaloy' // This should be dynamic
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Bangladeshi Taka (BDT)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: dataSeriesDeposit  
        }
      ;
  }
  
  getCashOutflowInformation(sel: string) {
    this.paymentOptions_Chart = {
      chart: {
        plotBackgroundColor: null,
          plotBorderWidth: 1,
          plotBorderColor: '#345600',
          plotShadow: false,
        type: 'line'

    },
    style: {
      fontFamily: 'serif'
    },
    title: {
        text: 'Monthly Cash <b> Outflow </b>'        
    },
    subtitle: {
        text: 'Source: Aparnacharan Balika Ucchaya Bidyaloy' // This should be dynamic
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Bangladeshi Taka (BDT)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: dataSeriesPayment
    }
  ;  }


  generateCashInflowPieChart(sel: string) {
    this.cashin_PieChart = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 1,
        plotBorderColor: '#345600',
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Cash <b> Inflow Ratio </b> By Source'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'InflowsPie',
        colorByPoint: true,
        data: peiChartDataCashInflow
    }]
    }
  ;  }

  generateCashOutflowPieChart(sel: string) {
    this.cashout_PieChart = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 1,
        plotBorderColor: '#345600',
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Cash <b> Outflow Ratio </b> By Source'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'OutflowsPie',
        colorByPoint: true,
        data: peiChartDataCashOutflow
    }]
    }
  ;  }

}
