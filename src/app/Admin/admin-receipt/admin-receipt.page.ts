import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin-receipt',
  templateUrl: './admin-receipt.page.html',
  styleUrls: ['./admin-receipt.page.scss'],
  imports: [CommonModule, IonApp, IonIcon, IonContent] 
})
export class AdminReceiptPage implements OnInit {
  transaction: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService,
    private location: Location
  ) {}

  ngOnInit() {
    const transactionId = this.route.snapshot.paramMap.get('id');
    if (transactionId) {
      this.transactionService.getTransaction(transactionId).subscribe({
        next: (data) => {
          this.transaction = data;
        },
        error: (err) => {
          console.error('Failed to fetch transaction', err);
        }
      });
    }
  }
  goBack() {
    this.location.back();
  }

}
