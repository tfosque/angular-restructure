import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagnosticComponent } from './diagnostic/diagnostic/diagnostic.component';
import { NavComponent } from './nav/nav/nav.component';
import { CardComponent } from './card/card/card.component';
import { CalloutComponent } from './callout/callout/callout.component';

import { CalloutService } from './services/callout.service';
import { AppSearchComponent } from './app-search/app-search.component';
import { SplashScreenComponent } from './splash/splash-screen/splash-screen.component';
import { QuanitySelectorComponent } from './quanity-selector/quanity-selector.component';
import { LineItemComponent } from './line-item/line-item/line-item.component';
import { LoaderComponent } from './loader/loader/loader.component';
import { CustomImageComponent } from './custom-image/custom-image/custom-image.component';
import { OrderSummaryComponent } from './order-summary/order-summary/order-summary.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ListSearchComponent } from './list-search/list-search.component';
import { FilterListPipe } from './pipes/filter-list.pipe';
import { FilterSearchPipe } from './pipes/filter-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DiagnosticComponent,
    NavComponent,
    CardComponent,
    CalloutComponent,
    AppSearchComponent,
    SplashScreenComponent,
    QuanitySelectorComponent,
    LineItemComponent,
    LoaderComponent,
    CustomImageComponent,
    OrderSummaryComponent,
    ShoppingCartComponent,
    ListSearchComponent,
    FilterListPipe,
    FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [CalloutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
