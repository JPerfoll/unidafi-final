import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../service/teachers.service';

@Component({
  selector: 'app-teachers-detail',
  templateUrl: './teachers-detail.page.html',
  styleUrls: ['./teachers-detail.page.scss'],
})
export class TeachersDetailPage implements OnInit {

  teacher: any;
  data: any;

  constructor(private teachersService: TeachersService) { }

  ngOnInit() {
    this.teachersService.getTeachersList('pos-graduacao/jean/teachers.json').subscribe(data => {
      this.data = data;

      for (let teacher of this.data.teachers) {        
        if (teacher.id == this.teachersService.id) {
          this.teacher = teacher;
          break;
        }
      }
    });
  }

}
