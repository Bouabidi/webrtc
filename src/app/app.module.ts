import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './webrtc/services/app-routing.module';
import { SocketService } from './webrtc/services/socket.service';
import { AppSettingsService } from './webrtc/services/app.settings.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './webrtc/home/home.component';
import { LoginComponent } from './webrtc/login/login.component';
import { StreamComponent } from './webrtc/stream/stream.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    StreamComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    SocketService,
    AppSettingsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
