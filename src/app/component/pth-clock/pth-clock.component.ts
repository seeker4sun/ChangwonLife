import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pth-clock',
  templateUrl: './pth-clock.component.html',
  styleUrls: ['./pth-clock.component.scss']
})
export class PthClockComponent implements AfterViewInit{
  
  @ViewChild('sc')      sc     !:ElementRef;
  @ViewChild('mn')      mn     !:ElementRef;
  @ViewChild('hr')      hr     !:ElementRef;
  @ViewChild('hours')   hours  !:ElementRef;
  @ViewChild('minutes') minutes!:ElementRef;
  @ViewChild('seconds') seconds!:ElementRef;
  @ViewChild('ampm')    ampm   !:ElementRef;
  
  updateClock():void {
    let day = new Date();
    let h   = day.getHours();
    let m   = day.getMinutes();
    let s   = day.getSeconds();
    let am  = h >= 12 ? "PM" : "AM";

    // analog clock
    // 위쪽방향 Y축이 0deg, 시계방향으로 각도 증가
    let hh = h * 30;
    let mm = m * 6;
    let ss = s * 6;

    this.hr.nativeElement.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    this.mn.nativeElement.style.transform = `rotateZ(${mm}deg)`;
    this.sc.nativeElement.style.transform = `rotateZ(${ss}deg)`;

    // digital clock 
    h = (h > 12) ? (h-12) : h;
    // pad zero before single digit number
    let strH :string = (h < 10) ? "0" + h : "" + h;
    let strM :string = (m < 10) ? "0" + m : "" + m;
    let strS :string = (s < 10) ? "0" + s : "" + s;

    this.hours  .nativeElement.innerHTML = strH;
    this.minutes.nativeElement.innerHTML = strM;
    this.seconds.nativeElement.innerHTML = strS;
    this.ampm   .nativeElement.innerHTML = am;
  }

  ngAfterViewInit(): void {
    //console.log(this.sc.nativeElement.innerHTML);
    setInterval(() => this.updateClock());
    //setInterval(()=>{this.updateClock();});
    //setInterval(this.updateClock.bind(this));
    //setInterval( this.updateClock ); // this 바인드 문제로 안됨
  }
}
