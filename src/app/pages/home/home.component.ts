import { Component, OnInit } from "@angular/core";
import { eventDispatcher, store } from "../../store";
import { ActionTypes } from "../../store/actions";
import { HomeService } from "./home.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  recipes: Array<object> = [];
  loading: boolean = true;
  loadingMore: boolean = false;
  error: string = "";

  constructor(private homeService: HomeService) {
    store.subscribe((state) => {
      const { recipes } = state;
      this.recipes = recipes;
    });
  }

  ngOnInit() {
    this.fetchRandom();
  }

  fetchRandom() {
    this.homeService.getRecipe().subscribe((response) => {
      this.loading = false;
      console.log(response);
      eventDispatcher.next({
        type: ActionTypes.GET_RECIPE,
        payload: response.recipe,
      });
    });
  }

  loadMore() {
    this.loadingMore = true;
    this.homeService.getRecipe().subscribe(
      (response) => {
        eventDispatcher.next({
          type: ActionTypes.GET_RECIPE,
          payload: response.recipe,
        });
        return (this.loadingMore = false);
      },
      (err) => {
        this.error = err.message;
        this.loadingMore = false;
      }
    );
  }
}
