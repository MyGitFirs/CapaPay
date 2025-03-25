import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonRadio } from "@ionic/angular/standalone";


@Component({
  selector: 'app-employee-notification',
  templateUrl: './employee-notification.page.html',
  styleUrls: ['./employee-notification.page.scss'],
  imports: [IonRadio, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class EmployeeNotificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
