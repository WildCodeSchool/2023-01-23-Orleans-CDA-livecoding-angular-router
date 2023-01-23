import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public search = '';

  constructor(private router: Router) {}

  onSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.router.navigate(['wcs'], {
      queryParams: {
        search: this.search,
      },
    });
  }
}
