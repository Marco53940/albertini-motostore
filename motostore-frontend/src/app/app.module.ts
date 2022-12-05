import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CookieService } from "ngx-cookie-service";
import { LoginModule } from "./login/login.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { ProductsModule } from "./products/products.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
