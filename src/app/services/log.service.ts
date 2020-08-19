import { Injectable } from '@angular/core';

// We import BehaviorSubject, Observable and of from Reactive Extensions
import { BehaviorSubject, Observable, of } from 'rxjs'; 

// We import Log from models
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  // We set local logs to type of Log array
  logs: Log[];

  // We create a logSource as a new BehaviorSubject with the type of Log and set it to intial vals of null
  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  // Here we take the logSource and set it as an Observable so it can be subscribed to
  selectedLog = this.logSource.asObservable();
  
  constructor() {
    // Created log data
    this.logs = [
      {
        id: '1',
        text: 'Generated Components', 
        date: new Date('12/26/2020 12:54:23')
      },
      {
        id: '2',
        text: 'Added Bootstrap', 
        date: new Date('12/26/2020 13:56:10')
      },
      {
        id: '3',
        text: 'Added Logs Component', 
        date: new Date('12/27/2020 10:20:15')
      }
    ]
  }

  // getLogs() Returns the logs data
  getLogs() {
    return this.logs;
  }

  // setFormLog() this takes in a selected log and sets it as the behavior subject and an observable then
  // Sends it back to the component that called it which they need to subscribe to
  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}

