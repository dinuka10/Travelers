import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  catagories = ['Seductive Beaches', 'Highlights Of Sri Lanka', 'Ceylon Heritage',
  'Misty Hills', 'Into The Wiled', 'Adventure Tour', 'Honeymoon Tour'];
  constructor() { }

  ngOnInit() {
  }

}
