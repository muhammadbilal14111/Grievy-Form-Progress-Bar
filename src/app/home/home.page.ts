import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Survey2CompComponent } from './../survey2-comp/survey2-comp.component';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public progress = 0;
  showComponent: string = 'component1';
  public arr: any = [];
  public keys: string[] = ['Pizza', 'Kebap', 'Spaghetti', 'Salad'];

  constructor(private dataService: DataService) {}

  onIonChange(ev: Event) {
    console.log(
      'ionChange emitted value:',
      (ev as RangeCustomEvent).detail.value
    );

    var obj: { key: string; val: number } = {
      key: this.keys[this.arr.length],
      val: (ev as RangeCustomEvent).detail.value as number,
    };
    this.arr.push(obj);
    console.log(this.arr);
    this.progress = this.arr.length / 4;
    console.log(this.progress);
    if (this.arr.length == 1) this.showComponent = 'component2';
    else if (this.arr.length == 2) this.showComponent = 'component3';
    else if (this.arr.length == 3) this.showComponent = 'component4';
    else {
      this.showComponent = 'resultComponent';
      this.arr.sort((a: any, b: any) => b.val - a.val);
      this.sendData(this.arr);
    }
  }

  sendData(arr: any) {
    this.dataService.setSharedData(arr);
  }
}
