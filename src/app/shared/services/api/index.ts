import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor() {}
  baseUrl = "http://taco-randomizer.herokuapp.com";
  random = () => `${this.baseUrl}/random/?full-taco=true`;
  contributors = ({ recipe_type, recipe_slug }) =>
    `/${this.baseUrl}/contributors/${recipe_type}/${recipe_slug}`;
}
