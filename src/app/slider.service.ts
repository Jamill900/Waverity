import { Injectable } from '@angular/core';
import data from '../app/infobase/banner.json';
import $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  public banner = data;

  constructor() { }
  settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<span class="prev" style="margin-right: 20px; cursor:pointer;"><img src="../../assets/images/left_arrow.svg"></span>',
    nextArrow: '<span class="next" style="margin-left: 20px; cursor:pointer;"><img src="../../assets/images/right_arrow.svg"></span>',
  };
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
