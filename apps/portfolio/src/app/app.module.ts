import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { NgParticlesModule } from "ng-particles";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
