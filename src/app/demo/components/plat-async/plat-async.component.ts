import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Plat } from 'src/app/models/plat.model';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat-async',
  templateUrl: './plat-async.component.html',
  styleUrls: ['./plat-async.component.css']
})
export class PlatAsyncComponent implements OnInit {

  $plat: Observable<Plat>;
  constructor(private route: ActivatedRoute, private service: PlatService, private router: Router) {
    const id = route.snapshot.params['id'];
    this.$plat = service.getPlat(id).pipe(
      catchError((err) => {
        router.navigateByUrl("demo/liste-plat");
        return of();
        })
    )
   }

  ngOnInit(): void {
  }

}
