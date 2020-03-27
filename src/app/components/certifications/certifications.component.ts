import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";
import { CertifService } from "../../services/certif.service";
import { NgZone } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { RouterLink } from '@angular/router';

@Component({
  selector: "app-certifications",
  templateUrl: "./certifications.component.html",
  styleUrls: ["./certifications.component.css"]
})
export class CertificationsComponent implements OnInit {
  buttonValue: any;
  scoresList: any = [];
  data : any;
  constructor(
    private quizApi: DataService,
    private api: CertifService,
    public ngZone: NgZone,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.loadScores();

  }
  loadScores() {
    return this.quizApi.GetScores().subscribe((data: {}) => {
      this.scoresList = Object.values(data);
      console.log(this.scoresList);
    });
  }
  download(index) {
    this.buttonValue = index;
    let certif = this.api.setCertif(
     this.data = this.buttonValue
    );
    window.open("/cert-model", '_blank');
    
  }
  
  //view(i) {
   // this.certif = this.quizApi.setCertif(
     // this.scoresList[i]
   // );
   // window.open("/cert-model", '_blank');
  //}

}
