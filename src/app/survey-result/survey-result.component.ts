import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss'],
})
export class SurveyResultComponent implements OnInit {
  public receivedData: any;
  public isLoading: boolean = true;

  constructor(private dataService: DataService) {
    setTimeout(() => {
      this.receivedData = this.dataService.getSharedData() as any;
      this.isLoading = false;
    }, 2000);
  }

  ngOnInit() {}
}
