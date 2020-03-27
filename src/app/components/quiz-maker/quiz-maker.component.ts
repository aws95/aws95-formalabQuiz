import { Component, OnInit } from "@angular/core";
import { DndDropEvent, DropEffect } from "ngx-drag-drop";
import { Router } from "@angular/router";
import { Quiz, Value } from "../../quiz";
import { HttpClient } from "@angular/common/http";
import { AngularFireObject } from "@angular/fire/database";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { DataService } from "../../services/data.service";
@Component({
  selector: "app-quiz-maker",
  templateUrl: "./quiz-maker.component.html",
  styleUrls: ["./quiz-maker.component.css"]
})
export class QuizMakerComponent implements OnInit {
  quizRef: AngularFireObject<any>;
  value: Value = {
    label: "",
    value: ""
  };
  success = false;
  payLoad = {};

  fieldModels: Array<Quiz> = [
    {
      type: "radio",
      icon: "fa-list-ul",
      label: "Radio",
      description: "Radio boxes",
      values: [
        {
          label: "Option 1",
          value: "Score"
        },
        {
          label: "Option 2",
          value: "Score"
        }
      ]
    }
  ];

  modelFields: Array<Quiz> = [];
  model: any = {
    name: "Quiz Name",
    description: "Quiz Description",
    attributes: this.modelFields
  };

  report = false;
  reports: any = [];
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private http: HttpClient,
    private quizApi: DataService
  ) {}

  ngOnInit() {}
  onDragStart(event: DragEvent) {
    console.log("drag started", JSON.stringify(event, null, 2));
  }
  onDragEnd(event: DragEvent) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }
  onDraggableCopied(event: DragEvent) {
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === "move") {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragCanceled(event: DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
      if (event.dropEffect === "copy")
        event.data.name = event.data.type + "-" + new Date().getTime();
      let index = event.index;
      if (typeof index === "undefined") {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }

  addValue(values: Value[]) {
    values.push(this.value);
    this.value = { label: "", value: "" };
  }

  removeField(i: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this field?",
      showCancelButton: true,
      confirmButtonColor: "#00B96F",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove!"
    }).then(result => {
      if (result.value) {
        this.model.attributes.splice(i, 1);
      }
    });
  }

  updateForm() {
    let input = new FormData();
    input.append("id", this.model._id);
    input.append("name", this.model.name);
    input.append("description", this.model.description);
    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','App updated successfully','success');
    // });
  }

  initReport() {
    this.report = true;
    let input = {
      id: this.model._id
    };
    // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
    //   this.reports = r.data;
    //   console.log('reports',this.reports);
    //   this.reports.map(records=>{
    //     return records.attributes.map(record=>{
    //       if(record.type=='checkbox'){
    //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
    //       }
    //     })
    //   });
    // });
  }

  toggleValue(item: { selected: boolean }) {
    item.selected = !item.selected;
  }

  myFunc() {
    this.payLoad = JSON.stringify({
      quiz_name: this.model.name,
      quiz_description: this.model.description,
      question_value: this.model.attributes
    });
    this.http
      .post("https://one-889f3.firebaseio.com/quizs" + ".json", this.payLoad)
      .subscribe(res => console.log(res));
    alert("Your Template has been saved");
    this.router.navigate(["/dashboard"]);
  }
}
