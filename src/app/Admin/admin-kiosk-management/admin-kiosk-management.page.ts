import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid } from "@ionic/angular/standalone";


@Component({
  selector: 'app-admin-kiosk-management',
  templateUrl: './admin-kiosk-management.page.html',
  styleUrls: ['./admin-kiosk-management.page.scss'],
  imports: [IonGrid, IonRow, IonCol, IonApp, IonIcon, IonContent] 
})
export class AdminKioskManagementPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackHome() {
    this.router.navigate(['/admin-home']);
  }

}
