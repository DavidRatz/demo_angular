import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pair',
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.css']
})
export class PairComponent implements OnInit {

  number!: number

  constructor(private route: ActivatedRoute) {
    const param_number = route.snapshot.paramMap.get("number");
    this.number = param_number ? parseInt(param_number) : -1;
  }

  ngOnInit(): void {
  }

}
