import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { NgZone } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  question: any = [];
  message: any;
  ind: any;
  credit = 0;
  quizforms: any;
  calculScore: any = [];
  answers: any = [];
  formData: any = [];
  IssuesList: any = [];
  selectedEntry: any;
  questions: any = {};
  arr: any = [];
  quizName: any;
  quizDescription: any;
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(
    public router: Router,
    public ngZone: NgZone,
    private quizApi: DataService,
    private http: HttpClient,
    public authService: AuthService
  ) {}
  ngOnInit() {
    this.loadFormData();
    console.log(this.answers);
  }
  loadFormData() {
    this.formData = this.quizApi.getQuestions();
    console.log(Object.values(this.formData).length);
    this.quizName = this.quizApi.getInfo();
    console.log(this.quizName);
  }
  onItemChange(x, index) {
    this.answers = x.value;
    this.ind = index;
    this.calculScore[this.ind] = this.answers;
    /*if (
      this.answers == "yes" ||
      this.answers == "YES" ||
      this.answers == "Yes" ||
      this.answers == "YEs"
    ) {
      this.credit = this.credit + 1;
    } else {
      this.credit = this.credit;
    }*/
    console.log(this.answers);
    console.log(this.ind);
    console.log(this.calculScore);
    console.log(this.calculScore.length);
  }
  submit(v) {
    for (let i = 0; i < this.calculScore.length; i++) {
      this.credit = this.credit + Number(this.calculScore[i]);
    }
    console.log(this.credit);
    console.log(this.calculScore.length * 5 * 0.75);
    if (this.credit >= this.calculScore.length * 5 * 0.75) {
      this.message = JSON.stringify({
        Score: this.credit,
        student: this.authService.userData.displayName,
        quiz_description: this.quizName.quiz_description,
        quiz_name: this.quizName.quiz_name
      });
      this.http
        .post("https://one-889f3.firebaseio.com/scores" + ".json", this.message)
        .subscribe(res => console.log(res));

      Swal.fire({
        title: "Congrats!",
        text:
          "You passed the Quiz with a score of " +
          this.credit +
          "/" +
          this.calculScore.length * 5,
        showCancelButton: true,
        confirmButtonColor: "#00B96F",
        cancelButtonColor: "#d33",
        confirmButtonText: "Okey"
      }).then(result => {
        if (result.value) {
          this.router.navigate(["/dashboard"]);
        }
      });
    } else {
      Swal.fire({
        title: "You Fucked Up!",
        text: "Take the Quiz Again",
        showCancelButton: true,
        confirmButtonColor: "#00B96F",
        cancelButtonColor: "#d33",
        confirmButtonText: "Okey"
      }).then(result => {
        if (result.value) {
          this.router.navigate(["/dashboard"]);
        }
      });
    }
  }
}
