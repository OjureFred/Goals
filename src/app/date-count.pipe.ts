import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

    transform(value: any): number {
      let today: Date = new Date(); // get current date and nativeElement
      let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      var dateDifference = Math.abs(value - todayWithNoTime); //diffference in milliseconds
      const secsInDay = 86400; //60 * 60 * 24
      var dateDifferenceSeconds = dateDifference * 0.001; //convert to milliseconds
      var dateCounter = dateDifferenceSeconds/secsInDay;

      if(dateCounter >= 1 && value > todayWithNoTime) {
        return dateCounter;
      } else {
        return 0;
      }
    }
  }
