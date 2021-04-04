import { Component, OnInit } from '@angular/core';
import { personneInterface } from './personneInterface';
import { PersonneService } from './personne.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public personnes: personneInterface[] = [];

  constructor(private personneService: PersonneService){}
  ngOnInit(): void {
    this.getPersonnes();
    }

    public getPersonnes():void{
      this.personneService.getPersonnes().subscribe(
        (response: personneInterface[]) => {
          this.personnes = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }


    public btnClick():void{
      this.addPersonne();
    }

    public addPersonne():void{
      this.personneService.addPersonne(this.personnes[0]);
    }


  title = 'ServicePlusFront';
}
