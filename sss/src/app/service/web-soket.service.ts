import { Injectable, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebSoketService {
  ws: WebSocket;
  constructor() {
  }
  OnInit() {
  }
  connent(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        this.ws.onmessage = event => observer.next(event.data);
        this.ws.onerror = event => observer.error(event);
        this.ws.onclose = event => observer.complete();
      }
    );
  }
  sendMessage() {
    this.ws.send('客服端发送给服务器');
    console.log('发送了');
  }
}
