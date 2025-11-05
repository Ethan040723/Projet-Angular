import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class ConnexionService {
  constructor(private http: HttpClient) {}

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();



  ConnexionUser(email: string, password: string): Observable<any> {
    const data={
      email: email,
      password: password,
    }
    return this.http.post<any>(`http://localhost:3000/login`, data)
  }
  InscriptionUser(data: any): Observable<any>{
    return this.http.post<any>(`http://localhost:3000/signup`, data)
  }
  MdpOublie(email:string): Observable<any>{
    return this.http.post<any>(`http://localhost:3000/reset-password`, email)
  }
  PartageDonne(data:any){

      this.dataSubject.next(data);

  }
}
