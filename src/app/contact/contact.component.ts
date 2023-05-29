import { Component } from '@angular/core';
import { Rezervare } from '../models/rezervare';
import { RezervareService } from '../services/rezervare.service';
import { Router } from '@angular/router';
import { Disponibilitate } from '../models/disponibilitate';
import { DisponibilitateService } from '../services/disponibilitate.service';
import { Observable } from 'rxjs';
import { updateDoc } from '@angular/fire/firestore';

interface Disponibilitate2 {
  data: string;
  numar: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {

  minDate: string;
  maxDate = '2023-06-30';
  disponibilities2: Disponibilitate2[] = [];
  documents: string[] = [];

  constructor(private rezervareService: RezervareService, private disponibilitateService: DisponibilitateService, private router: Router) {
    this.minDate = new Date().toISOString().split('T')[0];
  }

  newFirstName: string = '';
  newLastName: string = '';
  newDate: string ='';
  newEmail: string = '';
  newPhone: string = '';
  newNumberOfPeople: number = 0;
  newNumberOfAvailableSeats: number = 0;
  numberOfPlaces: number[]=[];
  locuri: number = 0;


  getDisponibility() {
    this.disponibilitateService.getDisponibility().subscribe(result => {
      result.forEach(element => {
        var obiect: Disponibilitate2 = { data: '', numar: 0 };
        obiect.data = element.date;
        obiect.numar = element.numberOfAvailableSeats;
        if(this.disponibilities2.length<=35)
           this.disponibilities2.push(obiect);
      });
    });
    //console.log(this.disponibilities2);
  }

  addReservation() {
    let newReservation = {
      firstName: this.newFirstName,
      lastName: this.newLastName,
      email: this.newEmail,
      phone: this.newPhone,
      date: this.newDate,
      numberOfPeople: this.newNumberOfPeople,
    };
    this.rezervareService.addReservation(newReservation);
    //this.getDisponibility();
    //this.getAllDocuments();
    let anotherDate: string = this.newDate;
    this.disponibilitateService.getNumarDeLocuriById(anotherDate).subscribe(numarDeLocuri => {var updateValue: number = numarDeLocuri;
      this.locuri = numarDeLocuri;
      updateValue = updateValue - this.newNumberOfPeople;
      this.disponibilitateService.updateDocument(anotherDate, 'numberOfAvailableSeats', updateValue);});
      console.log(this.numberOfPlaces);
    this.router.navigate(['/reservation']);
  }

  getAllDocuments() {
    this.disponibilitateService.getAllDocuments().subscribe(result => {
      result.forEach(element => {
        var obiect: string = ' ';
        obiect = element;
        if(this.documents.length<=35)
           this.documents.push(obiect);
      });
    });
  }

  isFormValid(): boolean {
    return !!this.newFirstName && !!this.newLastName && !!this.newEmail && !!this.newPhone && !!this.newDate && !!this.newNumberOfPeople && this.isValidEmail() && this.isValidPhone() && this.isValidNumber();
  }

  isValidEmail(): boolean {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailRegex.test(this.newEmail);
  }

  isValidPhone(): boolean {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(this.newPhone);
  }

  isValidNumber(): boolean{
    if ((this.newNumberOfPeople <= 1 && this.newNumberOfPeople >= 50))
    {
      return false;
    }
    else
        return true;
}
}
