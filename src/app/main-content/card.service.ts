import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from './card.model';

@Injectable({providedIn: 'root'})
export class CardService{
  private cards: Card[]= [];
  private cardUpdated = new Subject<Card[]>();

  getPosts() {
    return [...this.cards];
  }

  addPost(cardNumber: string, cardHolderName: string, cardExpiry: Date, cardSecurityCode: string, amount: number) {
    const card: Card = { CardNumber:cardNumber, CardHolderName: cardHolderName, CardExpiry: cardExpiry, CardSecurityCode: cardSecurityCode, Amount: amount }
    this.cards.push(card);
    this.cardUpdated.next([...this.cards]);
  }

  getCardUpdatedListener() {
    return this.cardUpdated.asObservable();

  }
}
