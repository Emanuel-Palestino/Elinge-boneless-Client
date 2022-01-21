import { Component } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    $(document).ready(function () {
      $('.modal').modal()
      $('.carousel').carousel()
      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
    });
  }

}
