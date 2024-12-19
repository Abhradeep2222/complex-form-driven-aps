import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
onPointClick($event: Event) {
throw new Error('Method not implemented.');
}
  data: any;
  chartOptions: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get('https://api.mocki.io/v1/your-mock-api-endpoint').subscribe(response => {
      this.data = response;
      this.initializeCharts();
    });
  }

  initializeCharts() {
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'User  Data Visualization'
      },
      xAxis: {
        categories: this.data.map((item: { category: any; }) => item.category)
      },
      series: [{
        name: 'Users',
        data: this.data.map((item: { value: any; }) => item.value)
      }]
    };
  }
}