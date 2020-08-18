import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];
  
  constructor() {
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
  getLogs() {
    return this.logs;
  }
}

