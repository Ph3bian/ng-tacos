import { Component, OnInit } from "@angular/core";
// import { eventDispatcher } from "../../store";
// import { ActionTypes } from "../../store/actions";
import { HomeService } from "./home.service";
import { Subject } from "rxjs";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  randomTaco = new Subject<{
    name: string;
    recipe: "string";
    slug: string;
    base_layer: object;
    mixin: object;
    shell: object;
    condiment: object;
  }>();

  loading: boolean = true;
  error: string = "";
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.fetchRandom();
  }

  fetchRandom() {
    try {
      this.homeService.getRecipe().subscribe((response) => {
        this.randomTaco.next({ ...response });
        this.loading = false;
      });
    } catch (e) {
      this.error = "Oops, an error occured";
      this.loading = false;
    }
  }
}
