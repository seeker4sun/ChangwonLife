import { Component } from '@angular/core';

@Component({
  selector: 'app-pth-promise-prototype',
  templateUrl: './pth-promise-prototype.component.html',
  styleUrls: ['./pth-promise-prototype.component.scss']
})
export class PthPromisePrototypeComponent {
  constructor() {
    
    var p = new Promise(function (resolve, reject) {
      resolve("성공입니다");    
      //reject("실패입니다.");
    });

    p.then(function (value) {
      console.log("then 메서드(이행) : " + value); //성공입니다.
      throw 'fail!';
    }, function (reason) {
      console.log("then 메서드(거부) : " + reason); //실패입니다.
      return reason;
    }).catch(function (reason) {
      console.log("catch 메서드 : " + reason);
    });
  }
}
