import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput, IonCardContent,  } from "@ionic/angular/standalone";

import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-admin-qr-generator',
  templateUrl: './admin-qr-generator.page.html',
  styleUrls: ['./admin-qr-generator.page.scss'],
  imports: [ IonCardContent, QRCodeComponent, IonInput,  IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
  
})
export class AdminQrGeneratorPage implements OnInit {

  user: any;
  qrData: string = '';
  private intervalId: any;

  constructor(private navCtrl: NavController, private router: Router ) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.qrData = this.user.id; // Set QR data to user ID
    }

    this.intervalId = setInterval(() => {
      if (this.user) {
        this.qrData = this.user.id; // Keep QR data synced if needed
      }
    }, 30000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToHome() {
    this.router.navigate(['/admin-home']);
  }
}
