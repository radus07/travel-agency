import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html'
})

export class NotFoundComponent implements OnInit {
  title = "404 Not Found";

  constructor() { }

  ngOnInit() { }
}