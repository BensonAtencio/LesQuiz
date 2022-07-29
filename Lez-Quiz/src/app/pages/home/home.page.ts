import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  eng(){
    this.router.navigate(['/eng-module']);
  }

  fil(){
    this.router.navigate(['/fil-module']);
  }

  math(){
    this.router.navigate(['/math-module']);
  }

  sci(){
    this.router.navigate(['/sci-module']);
  }
}
