import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationSectionService {

  currentLocation = new BehaviorSubject(null);
  constructor() { }
}
