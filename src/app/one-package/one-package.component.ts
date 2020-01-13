import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-package',
  templateUrl: './one-package.component.html',
  styleUrls: ['./one-package.component.css']
})
export class OnePackageComponent implements OnInit {
  clickedBtnId: string;
  isShown1 = true;
  isShown2 = false;
  isShown3 = false;
  constructor() { }

  ngOnInit() {
  }
  showHide(clickedContainer: string) {

    if (clickedContainer === 'c1') {
      this.isShown1 = true;
      this.isShown2 = false;
      this.isShown3 = false;
    }
    if (clickedContainer === 'c2') {
      this.isShown2 = true;
      this.isShown1 = false;
      this.isShown3 = false;
    }
    if (clickedContainer === 'c3') {
      this.isShown3 = true;
      this.isShown1 = false;
      this.isShown2 = false;
    }
  }

}
