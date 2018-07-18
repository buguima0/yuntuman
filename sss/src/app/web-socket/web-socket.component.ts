import { Component, OnInit } from '@angular/core';

import { WebSoketService } from './../service/web-soket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent implements OnInit {
  constructor(public webSoket: WebSoketService) { }

  ngOnInit() {
    this.webSoket.connent('ws://localhost:8080').subscribe(webSoket => {
      console.log(webSoket);
    });
  }
  sendMessage() {
    this.webSoket.sendMessage();
  }
}
