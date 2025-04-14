import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'https://localhost:5001/api/Transaction'; // Adjust as needed

  constructor(private http: HttpClient) { }

  getTransactions(query: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(query).forEach(key => {
      if (query[key] !== null && query[key] !== undefined) {
        params = params.set(key, query[key]);
      }
    });

    return this.http.get(`${this.baseUrl}`, { params });
  }

  getTransaction(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getTransactionsByUserId(userId: string, limit?: number, sortBy: string = 'date_desc'): Observable<any> {
    // Construct the URL with query parameters
    let url = `${this.baseUrl}/user/${userId}?sortBy=${sortBy}`;
    
    if (limit) {
      url += `&limit=${limit}`; // Add the limit if provided
    }
    
    return this.http.get(url);
  }  

  addTransaction(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, payload);
  }

  updateTransaction(id: string, payload: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }

  deleteTransaction(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
