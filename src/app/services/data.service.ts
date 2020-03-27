import { Injectable } from "@angular/core";
import { AngularFireList, AngularFireObject } from "@angular/fire/database";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DataService {
  private questions = {};
  private certif = {};
  private info = {};
  private REST_API_SERVER = "https://one-889f3.firebaseio.com/";
  quizsRef: AngularFireList<any>;
  quizRef: AngularFireObject<any>;
  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "Quiz/json"
    })
  };
  httpOption = {
    headers: new HttpHeaders({
      "Content-Type": "Score/json"
    })
  };
  quizs: Observable<any>;
  scores: Observable<any>;
  GetIssue(id: string) {
    return this.httpClient.get(
      this.REST_API_SERVER + "quizs.json" + id,
      this.httpOptions
    );
  }
  GetIssues() {
    const params = new HttpParams().set("quizId", "1");
    return this.httpClient.get(
      this.REST_API_SERVER + "quizs.json",
      this.httpOptions
    );
  }
  GetScore(h: string) {
    return this.httpClient.get(
      this.REST_API_SERVER + "scores.json" + h,
      this.httpOption
    );
  }
  GetScores() {
    const param = new HttpParams().set("scoreId", "1");
    return this.httpClient.get(
      this.REST_API_SERVER + "scores.json",
      this.httpOption
    );
  }
  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  setQuestions(value) {
    this.questions = value;
  }

  getQuestions() {
    return this.questions;
  }
  setInfo(value) {
    this.info = value;
  }

  getInfo() {
    return this.info;
  }
  setCertif(value) {
    this.certif = value;
  }

  getCertif() {
    return this.certif;
  }
}
