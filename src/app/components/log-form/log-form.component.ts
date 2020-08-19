import { Component, OnInit } from '@angular/core';

import { Log } from '../../models/Log';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  // Here we set some local variables
  id: string;
  text:string;
  date: any;
  
  // We pass in the service as an injectable to the constructor
  constructor(private logService: LogService) { }

  ngOnInit(): void {
    //Subscribe to the selectedLog Observable and set it to the local variables
    this.logService.selectedLog.subscribe(log => {
      if(log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    })
  }

}
