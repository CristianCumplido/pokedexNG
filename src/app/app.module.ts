import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './organismos/header/header.component';
import { MainComponent } from './organismos/main/main.component';
import { FooterComponent } from './organismos/footer/footer.component';
import { PokemonOthersComponent } from './atoms/pokemon-others/pokemon-others.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PokemonOthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
