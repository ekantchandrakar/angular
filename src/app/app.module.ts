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
import { AnotherServiceTutorialComponent } from './another-service-tutorial/another-service-tutorial.component';
import { PostService } from './services/post.service';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

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
    AnotherServiceTutorialComponent,
    TemplateDrivenFormsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
