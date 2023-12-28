import { Component } from '@angular/core';
import { MapService } from '../services/map.service';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private map: MapService) {}

  ngOnInit(): void {
    this.map.initMap(-34.397, 150.644, 'map'); // valores predeterminados
    // this.map.getCurrentPosition()
  }

  getCurrentPosition() {
    this.map.getCurrentPosition().then((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      // console.log(lat, lng);
      this.map.initMap(lat, lng, 'map')
    });
  }
}
