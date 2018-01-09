import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersServiceService } from '../../../../modules/login/users-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private usersServiceService: UsersServiceService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.usersServiceService.logout();
    alert('יצאת מהאתר');
    this.router.navigate(['/login']);
  }

  userName() {
    return localStorage.getItem('currentUser');
  }
}
