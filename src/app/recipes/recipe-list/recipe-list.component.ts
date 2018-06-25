import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
	new Recipe('A Test Recipe','Test may Be',
		'https://cdn.dribbble.com/users/721524/screenshots/4470961/7_6.png')
]
  constructor() { }

  ngOnInit() {
  }

}
