import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  nombre = "Luis Chang";
  objCurso: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>("https://lchang-0621.luischang.repl.co/")
      .subscribe((data) => {
        console.log(data);
        this.objCurso = data;
      });
  }
}
