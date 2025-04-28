import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HomePage implements OnInit {
  isLoading = true;

  constructor(private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;

    setTimeout(() => {
      if (token && user) {
        let route = '/home';
        switch (user.role) {
          case 'employee':
            route = '/employee-home';
            break;
          case 'admin':
            route = '/admin-home';
            break;
          case 'kiosk':
            route = '/kiosk-home';
            break;
        }
        this.router.navigate([route], { replaceUrl: true });
      } else {
        this.router.navigate(['/login'], { replaceUrl: true });
      }
    }, 1000); // Optional splash delay
  }
}
