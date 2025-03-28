import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid } from "@ionic/angular/standalone";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
  imports: [IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] // ✅ Import required Ionic components

})
export class AdminNavbarComponent  implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {}

  goToHome() {
    this.router.navigate(['/admin-home']);
  }
  goToTransactionHistory() {
    this.router.navigate(['/admin-transaction-history']);
  }
  goToNotification() {
    this.router.navigate(['/admin-notification']);
  }
  goToBalanceManagement() {
    this.router.navigate(['/admin-balance-management']);
  }

}
