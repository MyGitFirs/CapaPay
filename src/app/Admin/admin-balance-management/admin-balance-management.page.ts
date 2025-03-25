import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-admin-balance-management',
  templateUrl: './admin-balance-management.page.html',
  styleUrls: ['./admin-balance-management.page.scss'],
  imports: [IonInput, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class AdminBalanceManagementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
