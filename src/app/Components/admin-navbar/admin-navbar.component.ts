import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid } from "@ionic/angular/standalone";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
  imports: [IonFabButton, IonFab, IonIcon, IonTabButton, IonTabBar] // ✅ Import required Ionic components
 // ✅ Import required Ionic components

})
export class AdminNavbarComponent  implements OnInit {

  constructor(private navCtrl: NavController, private router: Router ) { }

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
  goToQR() {
    this.router.navigate(['/admin-qr-generator']);
  }
  goToProfile() {
    this.router.navigate(['/admin-profile']);
  }


  
  
  
  qrData: string = '';
  generateQRCode() {
    if (this.qrData.trim() !== '') {
      this.router.navigate(['/qr-display'], { queryParams: { qrData: this.qrData } });
    } else {
      alert('Please enter some text to generate a QR code.');
    }
  }

}
