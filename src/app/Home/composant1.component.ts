import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.css']
})
export class Composant1Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }

}
