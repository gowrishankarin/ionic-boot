import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gretting',
  templateUrl: './gretting.component.html',
  styleUrls: ['./gretting.component.css']
})
export class GrettingComponent implements OnInit {

	names: [{name: string}] = [{name: "Gary"}, {name: "BB"}, {name: "Savvy"}, {name: "Goady"}];

  constructor() { }

  ngOnInit() {
  }

}
