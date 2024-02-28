import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { DirectiveTutorialComponent } from './directive-tutorial/directive-tutorial.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ServiceTutorialComponent } from './service-tutorial/service-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    PostFormComponent,
    DirectiveTutorialComponent,
    UserDetailsComponent,
    ServiceTutorialComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
