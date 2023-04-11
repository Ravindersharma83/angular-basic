import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// for reactive form we have to import reactive form module and in .ts file import FormGroup,FormControl
import { ReactiveFormsModule } from '@angular/forms';
// importing custom created module
import {UserAuthModule} from './user-auth/user-auth.module'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChildComponent } from './child/child.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BasicFormComponent,
    ChildComponent,
    UsdInrPipe,
    PipeExampleComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
