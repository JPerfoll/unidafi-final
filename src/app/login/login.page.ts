import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data: any;
  user: any;
  password: any;

  constructor(private router: Router, private usersService: UsersService, private authGuard: AuthGuard) { }

  ngOnInit() {

  }

  login() {
    this.usersService.getUsersList(`pos-graduacao/usuario.json`)
    .subscribe(data => {
      this.data = data;

      for (let user of this.data.users) {
        if ((user.user == this.user) && (user.password == this.password)){
          this.authGuard.authenticated = true;
          this.router.navigate(['/teachers']);
          break;
        }else{
          this.authGuard.authenticated = false;
        }
      }
    });
  }

}
