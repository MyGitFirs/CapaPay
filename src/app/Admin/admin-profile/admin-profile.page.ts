import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonAvatar, IonInput } from "@ionic/angular/standalone";
import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.page.html',
  styleUrls: ['./admin-profile.page.scss'],
  imports: [IonInput, IonAvatar, AdminNavbarComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 

})
export class AdminProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNotification() {
    this.router.navigate(['/admin-notification']);
  }
  logOut() {
    this.router.navigate(['/login']);
  }


}
