import { Component, OnInit } from '@angular/core';

import { Log } from '../../models/Log';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: Log[];
  selectedLog: Log;
  loaded: boolean = false;

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logService.stateClear.subscribe(clear => {
      if(clear) {
        this.selectedLog = {id: '', text: '', date: ''}
      }
    })

    // Because we want to get our data asyncrously we need to get the data by subscribing to 
    // it and then setting the returned logs to local this.logs
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded = true;
    });
}

  // we create a onSleect which is triggered by (click) and pass it the log that was clicked
  // this then sets the BehaviorSubject to the value passed and shows it in the log-form as 
  // the log form is subscribed to show the data as long as the id !== null
  onSelect(log: Log) {
    this.logService.setFormLog(log);
    this.selectedLog = log;
  } 

  onDelete(log: Log) {
    this.logService.deleteLog(log);
  }
}
