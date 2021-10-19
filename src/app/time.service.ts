import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  nowTime: Observable<any>;
  constructor() {
    this.nowTime = new Observable((observer: Observer<any>) => {
      // observer.next(10);
      // observer.next(9);
      // observer.next(8);
      // observer.next(7);
      // observer.next(6);
      // observer.complete();
      // observer.next(5);
      // console.log("123");
      for(let i=0; i<100; i++){
        setTimeout(() => {
          observer.next(10-i);
          // if(i === 10){
          //   observer.complete();
          // }
        },i * 1000);
      }
    })
   }
}
