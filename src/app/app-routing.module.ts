import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackagesComponent } from './packages/packages.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { TripCustomizeComponent } from './trip-customize/trip-customize.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { OnePackageComponent } from './one-package/one-package.component';
import { BlogComponent } from './blog/blog.component';
import { InquireComponent } from './inquire/inquire.component';

const routes: Routes = [
  { path: 'frontpage', component: FrontPageComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'customize', component: TripCustomizeComponent },
  { path: 'package-details' , component: PackageDetailsComponent},
  { path: 'package' , component: OnePackageComponent},
  { path: 'blog' , component: BlogComponent},
  { path: 'inquire' , component: InquireComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
