import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";
import { NgZone } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"]
})
export class ScoreComponent implements OnInit {
  scoresList: any = [];
  constructor(
    private quizApi: DataService,
    public ngZone: NgZone,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.loadScores();
  }
  loadScores() {
    return this.quizApi.GetScores().subscribe((data: {}) => {
      this.scoresList = Object.values(data);
      console.log(this.scoresList);
    });
  }
}
