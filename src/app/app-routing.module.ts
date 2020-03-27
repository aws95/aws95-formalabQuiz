import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./components/signin/signin.component";
import { QuizMakerComponent } from "./components/quiz-maker/quiz-maker.component";
import { SignupComponent } from "./components/signup/signup.component";
import { PanelComponent } from "./components/panel/panel.component";
import { DashComponent } from "./components/dash/dash.component";
import { FormComponent } from "./components/form/form.component";
import { ScoreComponent } from "./components/score/score.component";
import { CertificationsComponent } from "./components/certifications/certifications.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { CertModelComponent } from "./components/cert-model/cert-model.component";
import { VerifyEmailComponent } from "./components/verify-email/verify-email.component";
import { AuthGuard } from "./auth.guard";
import { SecureInnerPagesGuard } from "./guards/secure-inner-pages.guard";

const routes: Routes = [
  { path: "", redirectTo: "/sign-in", pathMatch: "full" },
  {
    path: "sign-in",
    component: SigninComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: "cert-model",
    component: CertModelComponent
  },
  {
    path: "quiz-maker",
    component: QuizMakerComponent
  },
  {
    path: "register-user",
    component: SignupComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: "dashboard",
    component: DashComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:'',
        redirectTo: 'panel',
        pathMatch: 'full' 
    },
      {
        path: "panel",
        component: PanelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "certifications",
        component: CertificationsComponent
      },
      {
        path: "score",
        component: ScoreComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: "verify-email-address",
    component: VerifyEmailComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: "form",
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
