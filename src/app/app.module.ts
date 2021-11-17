import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { NikeComponent } from './pages/nike/nike.component';
import { AsicsComponent } from './pages/asics/asics.component';
import { LacosteComponent } from './pages/lacoste/lacoste.component';
import { AdidasComponent } from './pages/adidas/adidas.component';
import { PumaComponent } from './pages/puma/puma.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NikeComponent,
    AsicsComponent,
    LacosteComponent,
    AdidasComponent,
    PumaComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
