import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BananaComponent } from './Banana/banana/banana.component';
import { BlackberryComponent } from './BlackBerry/blackberry/blackberry.component';
import { BlueberryComponent } from './BuleBerry/blueberry/blueberry.component';
import { ButterscotchComponent } from './ButterScotch/butterscotch/butterscotch.component';
import { ChocolateComponent } from './Chocolate/chocolate/chocolate.component';
import { CoffeComponent } from './Coffe/coffe/coffe.component';
import { LefnavbarComponent } from './LefNavBar/lefnavbar/lefnavbar.component';
import { PineappleComponent } from './PineApple/pineapple/pineapple.component';
import { PistaComponent } from './Pista/pista/pista.component';
import { RaspberryComponent } from './RaspBerry/raspberry/raspberry.component';
import { StrawberryComponent } from './Strawberry/strawberry/strawberry.component';
import { VanillaComponent } from './Vanilla/vanilla/vanilla.component';

const routes: Routes = [
  {path:"Strawberry",component:StrawberryComponent},
  {path:"ButterScotch",component:ButterscotchComponent},
  {path:"Vanilla",component:VanillaComponent},
  {path:"Pista",component:PistaComponent},
  {path:"Chocolate",component:ChocolateComponent},
  {path:"BuleBerry",component:BlueberryComponent},
  {path:"BlackBerry",component:BlackberryComponent},
  {path:"Banana",component:BananaComponent},
  {path:"PineApple",component:PineappleComponent},
  {path:"RaspBerry",component:RaspberryComponent},
  {path:"Coffe",component:CoffeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
