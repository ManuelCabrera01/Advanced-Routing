import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import  {ContactEditComponent} from './contact-edit/contact-edit.component';
import  { ContactOverviewComponent} from './contact-overview/contact-overview.component'
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactServiceService } from './contact-service.service';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactComponent ,
 children: [
   { path: '', component: ContactOverviewComponent },
   { path: 'edit', component: ContactEditComponent }
       ]
 }
]


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
