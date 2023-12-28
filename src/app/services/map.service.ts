import { Injectable } from '@angular/core';
declare let google:any // por si no reconoce el google
import { Geolocation } from '@capacitor/geolocation';

/* const printCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition();

  console.log('Current position:', coordinates);
}; */

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  async initMap(lat: number, lng: number, id: string) {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary('maps');
    const map = new Map(document.getElementById(id) as HTMLElement, {
      // center: { lat: -34.397, lng: 150.644 },
      center: { lat, lng },
      zoom: 8,
    });
    const marker = new google.maps.Marker({ // Maker mayus
      position: { lat, lng },
      map
    })
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    // console.log('Current position:', coordinates);
    return coordinates
  }
}
