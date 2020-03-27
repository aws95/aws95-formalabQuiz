import { Injectable } from "@angular/core";
import { AngularFireList, AngularFireObject } from "@angular/fire/database";
import { HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CertifService {
  
  private certif = {};
  
  quizsRef: AngularFireList<any>;
  quizRef: AngularFireObject<any>;
  constructor(private httpClient: HttpClient) {}

  setCertif(value) {
    this.certif = value;
  }

  getCertif() {
    return this.certif;
  }
}
