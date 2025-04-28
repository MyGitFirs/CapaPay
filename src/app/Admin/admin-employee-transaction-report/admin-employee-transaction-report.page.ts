import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid, IonSearchbar } from "@ionic/angular/standalone";


@Component({
  selector: 'app-admin-employee-transaction-report',
  templateUrl: './admin-employee-transaction-report.page.html',
  styleUrls: ['./admin-employee-transaction-report.page.scss'],
  imports: [IonSearchbar, IonGrid, IonRow, IonCol, IonApp, IonIcon, IonContent] 
})
export class AdminEmployeeTransactionReportPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackHome() {
    this.router.navigate(['/admin-home']);
  }

}
