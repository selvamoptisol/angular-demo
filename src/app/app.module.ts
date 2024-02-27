import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';
import { UserService } from './services/user.services';
import { HttpClientModule } from '@angular/common/http';
//var ApiHost='54.202.218.249:9501';
@NgModule({
  declarations: [
    AppComponent,
    MyCustomDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
