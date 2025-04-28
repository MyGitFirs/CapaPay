import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput } from "@ionic/angular/standalone";

import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-balance-management',
  templateUrl: './admin-balance-management.page.html',
  styleUrls: ['./admin-balance-management.page.scss'],
  imports: [AdminNavbarComponent, IonInput, IonItem, IonList, IonButton, IonApp, IonIcon, IonLabel, IonContent] 
})
export class AdminBalanceManagementPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNotification() {
    this.router.navigate(['/admin-notification']);
  }

}
