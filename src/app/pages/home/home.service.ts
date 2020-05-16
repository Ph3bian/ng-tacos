import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/shared/services/api";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private http: HttpClient, private api: ApiService) {}

  getRecipe() {
    return this.http
      .get(this.api.random())
      .pipe(map((response: any) => response));
  }
}
