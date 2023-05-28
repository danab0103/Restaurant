import { Injectable } from '@angular/core';
import { addDoc, collectionData, collection, Firestore, getDocs, doc, updateDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Disponibilitate } from '../models/disponibilitate';

@Injectable({
  providedIn: 'root'
})
export class DisponibilitateService {


  constructor(private fs: Firestore) {}


  getDisponibility():Observable<Disponibilitate[]>{
    const myCollection: any = collection(this.fs, 'Disponibilitate');
    return collectionData(myCollection);
  }

  getAllDocuments(): Observable<string[]> {
    return new Observable<string[]>(observer => {
      getDocs(collection(this.fs, 'Disponibilitate')).then(snapshot => {
        const documentIds: string[] = snapshot.docs.map(doc => doc.id);
        observer.next(documentIds);
        observer.complete();
      }).catch(error => {
        observer.error(error);
      });
    });
  }

  updateDocument(documentId: string, fieldName: string, newValue: any): Promise<void> {
    const documentRef = doc(this.fs, 'Disponibilitate', documentId);
    const updateObject = { [fieldName]: newValue };
    return updateDoc(documentRef, updateObject);
  }
}
