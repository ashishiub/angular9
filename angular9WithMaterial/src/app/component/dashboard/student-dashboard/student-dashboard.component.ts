import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { DashboardChart } from 'src/app/model/dashboard-chart';
import { StudentService } from 'src/app/service/student.service';



var series = {
  type: 'pie'
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  public ratio: any;

  sel='Select';
  years: DashboardChart[];
  options: object;
  constructor(private studentService: StudentService) {
    
  }

  highchartsDefs() {
    this.getMaleFemaleRatio(this.sel);
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
    this.getMaleFemaleRatio(this.sel);
  }


  getMaleFemaleRatio(sel): any {
    this.studentService.getMaleFemaleRatio(sel)
      .subscribe((data) => {
        this.options = {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: 'Student Ratio by Gender'
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
            name: 'Gender',
            colorByPoint: true,
            data: data
          }]
  
        }
      });
  }



}
