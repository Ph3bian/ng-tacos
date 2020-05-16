import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContributorComponent } from "./pages/contributor/contributor.component";
import { ApiService } from "./shared/services/api";
import { HomeService } from "./pages/home/home.service";
import { HttpClientModule } from "@angular/common/http";
import { MarkedPipe } from "./shared/pipe/marked.pipe";
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    PageNotFoundComponent,
    HomeComponent,
    ContributorComponent,
    MarkedPipe,
    SpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService, HomeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
