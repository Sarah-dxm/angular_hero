import { Injectable } from '@angular/core';
import {Hero} from './hero'
import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of'
import { MessageService } from './message.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class HeroService {
  constructor(
    private http:HttpClient,
    private messageService:MessageService) { }
  private heroesUrl = 'http://120.27.12.205:9090/rest/tryout/banner/list'; 
  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService:fetched heroes')
    console.log(1)
    this.http.get(this.heroesUrl).pipe(
    );
    console.log(this.heroesUrl)
    return of (HEROES);
  };
  getHero(id:number){
    this.messageService.add(`HeroService:fetched hero id=${id}`)
    return of(HEROES.find(hero=>hero.id===id))
  };

}
