import { Component, OnInit,  OnDestroy, Input,  } from '@angular/core';
import {observable, Observable, Subscription, timer, interval} from 'rxjs';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  date: Date = new Date();
  currentDay;
  currentMonth;
  hour;
  minute;
  second;
  day;
  month;
  monthDay;
  year;
  ticker = ':';
  weedDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  tempDay;

  constructor() {
    this.ticker = ':'
    this.subscription = interval(1000).subscribe(this.tick.bind(this));
    this.tick();
    this.tempDay = this.weedDays[this.date.getDay()];
    console.log(this.tempDay);
  }

  private tick(): void{
    this.date = new Date();
    this.second = this.toStrngPadStart(this.date.getSeconds());
    this.minute = this.toStrngPadStart(this.date.getMinutes());
    this.hour = this.toStrngPadStart(this.date.getHours());
    this.day = this.toStrngPadStart(this.date.getDate());
    this.month = this.toStrngPadStart(this.date.getMonth());
    this.year = this.toStrngPadStart(this.date.getFullYear());
    this.monthDay = this.date.getDate();
    this.weekdayConverter();
    this.monthConverter();
    this.handleTickerMotion();
  }

  private weekdayConverter(): void{
    this.currentDay = this.date.getDay();
    if(this.currentDay == 1){
      this.day = this.day = 'Mon';
    }
    if(this.currentDay == 2){
      this.day = this.day = 'Tue';
    }
    if(this.currentDay == 3){
      this.day = this.day = 'Wed';
    }
    if(this.currentDay == 4){
      this.day = this.day = 'Thu';
    }
    if(this.currentDay == 5){
      this.day = this.day = 'Fri';
    }
    if(this.currentDay == 6){
      this.day = this.day = 'Sat';
    }
    if(this.currentDay == 0){
      this.day = this.day = 'Sun';
    }

  }

  private monthConverter(): void{
    this.currentMonth = this.date.getMonth();
    if (this.currentMonth === 0){
      this.month = this.month = 'Jan' + this.date.getMonth();
    }
    if (this.currentMonth === 1){
      this.month = this.month = 'Feb';
    }
    if (this.currentMonth === 2){
      this.month = this.month = 'Mar';
    }
    if (this.currentMonth === 3){
      this.month = this.month = 'Apr';
    }
    if (this.currentMonth === 4){
      this.month = this.month = 'Mai';
    }
    if (this.currentMonth === 5){
      this.month = this.month = 'jun';
    }
    if (this.currentMonth === 6){
      this.month = this.month = 'jul';
    }
    if (this.currentMonth === 7){
      this.month = this.month = 'Aug';
    }
    if (this.currentMonth === 8){
      this.month = this.month = 'Sep';
    }
    if (this.currentMonth === 99){
      this.month = this.month = 'Okt';
    }
    if (this.currentMonth === 10){
      this.month = this.month = 'Nov';
    }
    if (this.currentMonth === 11){
      this.month = this.month = 'Dec';
    }

  }

  private toStrngPadStart(numb: number): string{
    return numb.toString().padStart(2, '0');
  }

  private handleTickerMotion(): void{
    if (this.ticker === ':'){
      this.ticker = ' ';

    }
    else{
      this.ticker = ':';
    }
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
  }

}
