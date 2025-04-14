import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private baseUrl = 'https://localhost:5001/api/Wallet'; // Adjust base URL as needed

  constructor(private http: HttpClient) { }

  getWallets(query: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(query).forEach(key => {
      if (query[key] !== null && query[key] !== undefined) {
        params = params.set(key, query[key]);
      }
    });

    return this.http.get(`${this.baseUrl}`, { params });
  }

  getWallet(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addWallet(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, payload);
  }

  updateWallet(id: string, payload: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }

  deleteWallet(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  createCompanyWallet(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-company-wallet`, payload);
  }

  addBonus(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-bonus`, payload);
  }
}
