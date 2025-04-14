import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid,IonSelect, IonSelectOption } from "@ionic/angular/standalone";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.page.html',
  styleUrls: ['./company-details.page.scss'],
  imports: [IonCard, IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonSelect,IonSelectOption] // ✅ Import required Ionic components

})
export class CompanyDetailsPage implements OnInit {
  
  companyName: string = '';
  natureOfBusiness: string = '';

  constructor(private router: Router ) { }

  registerCompany() {
    console.log('Company Name:', this.companyName);
    console.log('Nature of Business:', this.natureOfBusiness);
    // Add your registration logic here
  }

  ngOnInit() {
  }


  goToLogin() {
    this.router.navigate(['/login']);
  }

  
}
