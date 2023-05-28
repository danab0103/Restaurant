import { Component } from '@angular/core';
import { Rezervare } from '../models/rezervare';
import { RezervareService } from '../services/rezervare.service';
import { Router } from '@angular/router';
import { Disponibilitate } from '../models/disponibilitate';
import { DisponibilitateService } from '../services/disponibilitate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
 
  newDate: string;
  maxDate = '2023-06-30';
  disponibilities: Disponibilitate[] = [];
  documents: any[] = [];

  constructor(private rezervareService: RezervareService, private disponibilitateService: DisponibilitateService, private router: Router){
    this.newDate = new Date().toISOString().split('T')[0];
  }

  newFirstName: string = '';
  newLastName: string = '';
  newEmail: string = '';
  newPhone: string = '';
  newNumberOfPeople: number = 0;
  newNumberOfAvailableSeats: number = 0;


  getDisponibility()
  {
    this.disponibilitateService.getDisponibility().subscribe(result=>
      {
        this.disponibilities = result;
      });
  }

  addReservation(){
    let newReservation = {
                          firstName: this.newFirstName, 
                          lastName: this.newLastName,
                          email: this.newEmail,
                          phone: this.newPhone,
                          date: this.newDate,
                          numberOfPeople: this.newNumberOfPeople,
                        };
    //this.rezervareService.addReservation(newReservation);
    //this.getAllDocuments();
    //let i = 0;
    //console.log(this.arr);
    //for (var ar of this.arr) {
    //   if (ar.date === this.newDate) {
      //  ar.numberOfAvailableSeats -= this.newNumberOfPeople;
       //this.disponibilitateService.updateDocument(this.documents[i], 'numberOfAvailableSeats', updatedValue);
    //}
      //i+=1;
     //}
     //console.log(this.arr);
    //this.router.navigate(['/reservation']);
  }


  getAllDocuments(){
    this.disponibilitateService.getAllDocuments().subscribe(result=>
      {
        this.documents = result;
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

  isValidNumber(): boolean {
    if(this.newNumberOfPeople>=1 && this.newNumberOfPeople<=50)
       return true;
    else
    return false;
  }
}
