import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';
import { personneInterface } from './personneInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

private ServicePlusUrl = environment.url;

  constructor(private http: HttpClient) { }

  public getPersonne(id: number): Observable<personneInterface>{
    return this.http.get<personneInterface>(`${this.ServicePlusUrl}/personne/${id}`);
  }

  public getPersonnes(): Observable<personneInterface[]>{
    return this.http.get<personneInterface[]>(`${this.ServicePlusUrl}/personnes`);
  }

  public addPersonne(personne: personneInterface): Observable<personneInterface>{
    return this.http.post<personneInterface>(`${this.ServicePlusUrl}/personne`,personne);
  }

  public addPersonnes(personnes: personneInterface[]): Observable<personneInterface[]>{
    return this.http.post<personneInterface[]>(`${this.ServicePlusUrl}/personnes`,personnes);
  }

  public updatePersonne(personne: personneInterface): Observable<personneInterface>{
    return this.http.put<personneInterface>(`${this.ServicePlusUrl}/personne`,personne);
  }

  public deletePersonne(id: number): Observable<HttpResponseBase>{
    return this.http.delete<HttpResponseBase>(`${this.ServicePlusUrl}/personne/${id}`);
  }

}
