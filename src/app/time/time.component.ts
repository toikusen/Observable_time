import { TimeService } from './../time.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit,OnDestroy {
  nowTime = 10;
  unNowTime!: Subscription;
  constructor(private timeService: TimeService,private route: Router) { }

  ngOnInit(): void {
    this.unNowTime = this.timeService.nowTime.subscribe(value=>{
      console.log(value);
      this.nowTime = value;
      if(this.nowTime === 0){
        this.route.navigate(['/login']);
      }
    })
  }

  ngOnDestroy(): void{
    this.unNowTime.unsubscribe();
  }

}
