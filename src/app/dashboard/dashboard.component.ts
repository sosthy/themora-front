import { Component, OnInit } from '@angular/core';
import { DashboardItems } from '../shared/menu-items/dashboard-items';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private items: DashboardItems) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
  }

}
