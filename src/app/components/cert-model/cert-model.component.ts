import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from "../../services/data.service";
import { CertifService } from "../../services/certif.service";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../services/auth.service";
import * as JSPdf from 'jspdf';
@Component({
  selector: 'app-cert-model',
  templateUrl: './cert-model.component.html',
  styleUrls: ['./cert-model.component.css']
})
export class CertModelComponent implements OnInit {
  certificationData: any;
  uniqueCert: any
  currentDate: any;
  ind: any;
  constructor(
    private quizApi: DataService,
    private api : CertifService,
    private http: HttpClient,
    public authService: AuthService) { }

  ngOnInit() {
    this.loadCert();
    this.ind = this.api.getCertif();
    console.log(this.ind);
  }
  loadCert() {
    return this.quizApi.GetScores().subscribe((data: {}) => {
      this.certificationData = Object.values(data);
      this.uniqueCert = this.certificationData[this.ind];
      
      this.currentDate = new Date();
    });
  }
  @ViewChild('content', { static: false }) content: ElementRef;

  makePdf() {
    let doc = new JSPdf({
      orientation: 'landscape',
      unit: 'in',
      format: [4, 2]
    });
    doc.addHTML(this.content.nativeElement, function () {
      doc.save("obrz.pdf");
    });
  }
}
