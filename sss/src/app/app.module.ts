import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebSocketComponent } from './web-socket/web-socket.component';
import { WebSoketService } from './service/web-soket.service';

const routes: Routes = [{
  path: '', loadChildren: './a/a.module#AModule'
}];
@NgModule({
  declarations: [
    AppComponent,
    WebSocketComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebSoketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
