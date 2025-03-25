import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AddressBookService {
  private apiUrl = 'http://localhost:8080/api/contacts'; // ✅ Fixed URL

  constructor(private http: HttpClient, private authService: AuthService) {}

  // ✅ Helper method to get auth headers
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (!token) {
      console.error('No token found! User may not be authenticated.');
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  // ✅ Get all contacts with error handling
  getPersons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getAuthHeaders() }).pipe(
      catchError((error) => {
        console.error('Error fetching contacts:', error);
        return throwError(() => new Error('Failed to fetch contacts. Please try again later.'));
      })
    );
  }

  // ✅ Add a new contact with error handling
  addPerson(person: any): Observable<any> {
    return this.http.post(this.apiUrl, person, { headers: this.getAuthHeaders() }).pipe(
      catchError((error) => {
        console.error('Error adding contact:', error);
        return throwError(() => new Error('Failed to add contact. Please try again.'));
      })
    );
  }
}
