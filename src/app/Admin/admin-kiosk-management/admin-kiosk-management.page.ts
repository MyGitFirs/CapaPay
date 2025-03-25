import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid } from "@ionic/angular/standalone";


@Component({
  selector: 'app-admin-kiosk-management',
  templateUrl: './admin-kiosk-management.page.html',
  styleUrls: ['./admin-kiosk-management.page.scss'],
  imports: [IonGrid, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class AdminKioskManagementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
