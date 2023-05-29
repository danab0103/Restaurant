import { Injectable } from '@angular/core';
import { addDoc, collectionData, collection, Firestore, getDocs, doc, updateDoc, setDoc, getDoc, DocumentSnapshot } from '@angular/fire/firestore';
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

  getNumarDeLocuriById(documentId: string): Observable<number> {
    const documentRef = doc(this.fs, 'Disponibilitate', documentId);
    return new Observable<number>(observer => {
      getDoc(documentRef)
        .then((docSnapshot: DocumentSnapshot<any>) => {
          if (docSnapshot.exists()) {
            const documentData = docSnapshot.data();
            const numarDeLocuri = documentData.numberOfAvailableSeats;
            observer.next(numarDeLocuri);
          } else {
            observer.error('Document does not exist');
          }
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}

