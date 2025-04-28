import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'https://192.168.100.11:5001/api/Company'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  getCompanies(query: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(query).forEach(key => {
      if (query[key] !== undefined && query[key] !== null) {
        params = params.set(key, query[key]);
      }
    });

    return this.http.get(`${this.baseUrl}`, { params });
  }

  getCompanyById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCompany(companyData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, companyData);
  }

  updateCompany(id: string, companyData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, companyData);
  }

  joinCompany(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/join-company`, data);
  }

  deleteCompany(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
