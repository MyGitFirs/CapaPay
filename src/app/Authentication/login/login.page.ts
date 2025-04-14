import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

import {
  IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar,
  IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab,
  IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid,
  ToastController, LoadingController
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton,
    IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon,
    IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs,
    IonTabBar, HttpClientModule, FormsModule
  ]
})
export class LoginPage implements OnInit {

  email = '';
  password = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  // Email validation function
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Password validation function
  isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

  async login() {
    if (!this.isValidEmail(this.email)) {
      const toast = await this.toastController.create({
        message: 'Invalid email format.',
        duration: 2000,
        color: 'danger'
      });
      return toast.present();
    }


    const credentials = {
      email: this.email,
      password: this.password
    };

    const loading = await this.loadingController.create({
      message: 'Logging in...',
      spinner: 'crescent'
    });
    await loading.present();

    this.userService.login(credentials).subscribe({
      next: async (res) => {
        console.log('✅ Login response:', res);

        const user = {
          id: res.id,
          firstName: res.firstName,
          lastName: res.lastName,
          role: res.role,
          email: res.email
        };
        this.userService.setUser(user);

        localStorage.setItem('token', res.token);
        localStorage.setItem('refreshToken', res.refreshToken);
        localStorage.setItem('user', JSON.stringify(user));

        const toast = await this.toastController.create({
          message: `Welcome back, ${user.firstName}!`,
          duration: 2000,
          color: 'success'
        });
        toast.present();

        let route = '/home';
        switch (res.role) {
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

        this.router.navigate([route]);
        loading.dismiss();
      },
      error: async (err) => {
        console.error('❌ Login error:', err);

        const toast = await this.toastController.create({
          message: 'Login failed. Please try again.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
        loading.dismiss();
      }
    });
  }

  goToRegisterOption() {
    this.router.navigate(['/register-option']);
  }
}
