import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getFormData(): Observable<any> {
    return this.http.get('/api/formData');
  }

  getFilteredData(criteria: string): Observable<any> {
    return this.http.get(`/api/data?filter=${criteria}`);
  }
}