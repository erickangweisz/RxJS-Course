import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObserverComponent } from './_components/observer/observer.component';
import { IntervalTimerComponent } from './_components/interval-timer/interval-timer.component';
import { FromeventComponent } from './_components/fromevent/fromevent.component';
import { MapFilterComponent } from './_components/map-filter/map-filter.component';
import { TapComponent } from './_components/tap/tap.component';

@NgModule({
  declarations: [
    AppComponent,
    ObserverComponent,
    IntervalTimerComponent,
    FromeventComponent,
    MapFilterComponent,
    TapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
