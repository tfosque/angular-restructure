import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagnosticComponent } from './diagnostic/diagnostic/diagnostic.component';
import { NavComponent } from './nav/nav/nav.component';
import { CardComponent } from './card/card/card.component';
import { CalloutComponent } from './callout/callout/callout.component';

import { CalloutService } from './services/callout.service';
import { AppSearchComponent } from './app-search/app-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagnosticComponent,
    NavComponent,
    CardComponent,
    CalloutComponent,
    AppSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CalloutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
