import { Component, OnInit, NgZone } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NgModule } from "@angular/core";
import { PanelComponent } from "../../components/panel/panel.component";
import { ScoreComponent } from "../../components/score/score.component";
@NgModule({
  declarations: [PanelComponent, ScoreComponent]
})
@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.css"]
})
export class DashComponent implements OnInit {
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) {}

  ngOnInit() {}
}
