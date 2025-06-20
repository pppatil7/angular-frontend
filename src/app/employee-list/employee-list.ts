import { Component } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  employees!: Employee[];

  ngOnInit(): void{
    this.employees = [{
      "empUserId": 1,
      "empFirstName": "john",
      "empLastName": "will",
      "empEmailId": "jwill@co.in"
    },{
           "empUserId": 2,
      "empFirstName": "peter",
      "empLastName": "davidson",
      "empEmailId": "pdavidson@co.in"
    }];
  }

}
