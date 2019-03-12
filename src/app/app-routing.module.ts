import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AddPhoneNumberComponent } from './add-phone-number/add-phone-number.component';
import { ViewPhoneNumberComponent } from './view-phone-number/view-phone-number.component';

const routes: Routes = [
  { path : 'add-phone-number', component: AddPhoneNumberComponent },
  { path : 'view-phone-number', component: ViewPhoneNumberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
