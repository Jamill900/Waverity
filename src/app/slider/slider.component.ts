import { Custom } from './../custom';
import { SolutionsService } from './../solutions.service';
import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { Rss } from './../rss';
import { Oil } from './../oil';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  oil: Oil[] = [];
  custom: Custom[] = [];
  rss: Rss[] = [];
  loading = false;

  constructor(private solutions: SolutionsService) { }
  settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<span class="prev" style="margin-right: 20px; cursor:pointer;"><img src="../../assets/images/left_arrow.svg"></span>',
    nextArrow: '<span class="next" style="margin-left: 20px; cursor:pointer;"><img src="../../assets/images/right_arrow.svg"></span>',
  };

  ngOnInit(): void {
    this.getRssProducts();
    this.getOilProducts();
    this.getCustomProducts();
  }

  getRssProducts() {
    this.loading = true;
    this.solutions.getRssSolutions().subscribe(rss => {
      this.rss = rss;
    })
  }

  getOilProducts() {
    this.loading = true;
    this.solutions.getOilSolutions().subscribe(oil => {
      this.oil = oil;
    })
  }

  getCustomProducts() {
    this.loading = true;
    this.solutions.getCustomSolutions().subscribe(custom => {
      this.custom = custom;
    })
  }
  
  slickInit(e: any) {
    var $firstAnimatingElements = $('.single-banner').find('[data-animation]');
    this.doAnimations($firstAnimatingElements);
  }
  beforeChange(e: any) {
    var $firstAnimatingElements = $('.single-banner').find('[data-animation]');
    this.doAnimations($firstAnimatingElements);
  }

  public doAnimations(elements: JQuery<HTMLElement>) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
  
}
