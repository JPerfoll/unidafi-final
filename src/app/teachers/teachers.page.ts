import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TeachersService } from '../service/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {

  data: any;

  constructor(private router: Router, private Http: HttpClient, private teachersService: TeachersService) { }

  ngOnInit() {
    this.teachersService.getTeachersList('pos-graduacao/jean/teachers.json').subscribe(data => {
      this.data = data;
    });  
  }

  exit() {
    this.router.navigate(["/login"]);
  }

  showTeacherDetail(teacher) {
    this.teachersService.id = teacher.id;
    this.router.navigate(['/teachers-detail']);
  }

}
