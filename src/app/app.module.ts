import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { LefnavbarComponent } from './LefNavBar/lefnavbar/lefnavbar.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { BananaComponent } from './Banana/banana/banana.component';
import { BlackberryComponent } from './BlackBerry/blackberry/blackberry.component';
import { BlueberryComponent } from './BuleBerry/blueberry/blueberry.component';
import { ButterscotchComponent } from './ButterScotch/butterscotch/butterscotch.component';
import { ChocolateComponent } from './Chocolate/chocolate/chocolate.component';
import { CoffeComponent } from './Coffe/coffe/coffe.component';
import { PineappleComponent } from './PineApple/pineapple/pineapple.component';
import { PistaComponent } from './Pista/pista/pista.component';
import { RaspberryComponent } from './RaspBerry/raspberry/raspberry.component';
import { StrawberryComponent } from './Strawberry/strawberry/strawberry.component';
import { VanillaComponent } from './Vanilla/vanilla/vanilla.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LefnavbarComponent,
    FooterComponent,
    BananaComponent,
    BlackberryComponent,
    BlueberryComponent,
    ButterscotchComponent,
    ChocolateComponent,
    CoffeComponent,
    PineappleComponent,
    PistaComponent,
    RaspberryComponent,
    StrawberryComponent,
    VanillaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
