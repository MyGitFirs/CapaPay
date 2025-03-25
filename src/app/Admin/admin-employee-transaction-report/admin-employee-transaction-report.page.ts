import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid, IonSearchbar } from "@ionic/angular/standalone";


@Component({
  selector: 'app-admin-employee-transaction-report',
  templateUrl: './admin-employee-transaction-report.page.html',
  styleUrls: ['./admin-employee-transaction-report.page.scss'],
  imports: [IonSearchbar, IonGrid, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class AdminEmployeeTransactionReportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
