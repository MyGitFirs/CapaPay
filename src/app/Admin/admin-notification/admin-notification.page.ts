import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonRadio, IonText } from "@ionic/angular/standalone";

import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.page.html',
  styleUrls: ['./admin-notification.page.scss'],
  imports: [CommonModule, IonText, AdminNavbarComponent, IonRadio, IonApp, IonIcon, IonContent] 
})
export class AdminNotificationPage implements OnInit {
  notifications: string[] = [];

  constructor(private oneSignal: OneSignal) { }

  ngOnInit() {
    this.listenToNotifications();
  }

  listenToNotifications() {
    this.oneSignal.handleNotificationReceived().subscribe((data: any) => {
      const message = data.payload.body;
      this.notifications.unshift(message); 
    });
  }

}
