import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    ModalComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
