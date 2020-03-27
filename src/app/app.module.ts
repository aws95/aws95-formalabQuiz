import { BrowserModule } from "@angular/platform-browser";
import { DndModule } from "ngx-drag-drop";
import { PanelComponent } from "./components/panel/panel.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { DashComponent } from "./components/dash/dash.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { QuizMakerComponent } from "./components/quiz-maker/quiz-maker.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { VerifyEmailComponent } from "./components/verify-email/verify-email.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { DataService } from "./services/data.service";
import { FormComponent } from "./components/form/form.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import * as firebase from "firebase";
import { ScoreComponent } from './components/score/score.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { CertModelComponent } from './components/cert-model/cert-model.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CertifService } from "./services/certif.service";

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    PanelComponent,
    QuizMakerComponent,
    FormComponent,
    ScoreComponent,
    CertificationsComponent,
    CertModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, "one-889f3"),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    DndModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthGuardService, AuthService, DataService,CertifService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
