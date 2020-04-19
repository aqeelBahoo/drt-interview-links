import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public rows = [];
  private temRows = [];

  constructor(
    private httpService: HttpService
  ) {
    this.httpService.getCourseList().subscribe((data) => {
      this.rows = data;
      this.temRows = data;
    })
  }

  ngOnInit() {
  }

  public search(value) {
    this.rows = this.temRows.filter((item) => item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

}
