import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data = [
    {name: 'akshay', email: 'akshay@gmail.com', Contact:'1234567890'},
    {name: 'samir', email: 'samir@gmail.com', Contact:'1234567890'},
    {name: 'Rajesh', email: 'Rst@gmail.com', Contact:'1234567890'},
    {name: 'tejas', email: 'tejast@gmail.com', Contact:'1234567890'},
];

title = 'angulardatatables';
@ViewChild(DataTableDirective, { static: false })
dtElement: DataTableDirective | undefined;
  //dtTrigger: Subject<void> = new Subject<void>();
dtOptions: DataTables.Settings = {};

dtTrigger: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    };
  }

}
