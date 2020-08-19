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

  isNew: boolean = true;
  
  // We pass in the service as an injectable to the constructor
  constructor(private logService: LogService) { }

  ngOnInit(): void {
    //Subscribe to the selectedLog Observable and set it to the local variables
    this.logService.selectedLog.subscribe(log => {
      if(log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    })
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  

  onSubmit() {
    // Check if new log
    if(this.isNew) {
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      }
      // Add Log
      this.logService.addLog(newLog);
    }else {
      // Log to be updates
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      }
      //Update Log
      this.logService.updateLog(updLog);
    }
  }

}
