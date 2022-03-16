import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Plat } from 'src/app/models/plat.model';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  id: number;
  plat!: Plat;
  //router!: Router;

  constructor(route: ActivatedRoute, private platService: PlatService, router: Router) {
    const param_id = route.snapshot.paramMap.get("id");
    this.id = param_id ? parseInt(param_id) : -1;
    if(this.id && this.id > 0)
      platService.getPlat(this.id).subscribe({
        next: plat => this.plat = plat,
        error: err => router.navigateByUrl('demo/liste-plat')
      });
  }

  ngOnInit(): void {
  }

}
