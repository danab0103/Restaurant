import { Injectable } from '@angular/core';
import { addDoc, collectionData, collection, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Rezervare } from '../models/rezervare';

@Injectable({
  providedIn: 'root'
})
export class RezervareService {

  constructor(private fs : Firestore) { }

  addReservation(reservation:Rezervare){
    const myCollection:any = collection(this.fs, 'Rezervare');
    addDoc(myCollection, reservation);
  }
}
