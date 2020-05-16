import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }
  ngOnInit() {}

  getTitle() {
    let title = this.location.prepareExternalUrl(this.location.path());
    title = title.split("/").pop();
    return title;
  }
}
