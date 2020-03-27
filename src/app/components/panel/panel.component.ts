import { Component, OnInit, Input } from "@angular/core";
import { NgZone } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  quizdata: any = {};
  IssuesList: any = [];
  quizforms: any;
  questions: any = [];
  arr: any = [];
  labels: any = [];
  buttonValue: any;
  afAuth: any;
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private quizApi: DataService
  ) {}
  ngOnInit() {
    this.loadQuizs();
  }
  loadQuizs() {
    return this.quizApi.GetIssues().subscribe((data: {}) => {
      this.IssuesList = data;
      this.quizforms = Object.values(this.IssuesList);
      console.log(this.quizforms);
      console.log(typeof this.quizforms);
      for (let i = 0; i < Object.values(this.quizforms).length; i++) {
        this.labels[i] = Object.values(this.quizforms[i]["quiz_name"]);
        this.labels[i] = this.labels[i].join("");
      }
      console.log(this.labels);
      console.log(Object.values(this.quizforms).length);
    });
  }
  toggle(index) {
    this.buttonValue = index;
    let questions = this.quizApi.setQuestions(
      this.quizforms[this.buttonValue]["question_value"]
    );
    let name = this.quizApi.setInfo(this.quizforms[this.buttonValue]);
  }
}
