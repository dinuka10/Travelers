import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MVPackageComponent } from './mvpackage/mvpackage.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PackagesComponent } from './packages/packages.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { TripCustomizeComponent } from './trip-customize/trip-customize.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { OnePackageComponent } from './one-package/one-package.component';
import { BlogComponent } from './blog/blog.component';
import { InquireComponent } from './inquire/inquire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    MVPackageComponent,
    FooterComponent,
    ReviewsComponent,
    PackagesComponent,
    FrontPageComponent,
    TripCustomizeComponent,
    PackageDetailsComponent,
    OnePackageComponent,
    BlogComponent,
    InquireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
