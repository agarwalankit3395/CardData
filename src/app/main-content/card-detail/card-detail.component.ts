import { Component, Injectable, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Card } from '../card.model';
import { CardService } from "../card.service";

@Injectable({providedIn: 'root'})
@Component({
  selector:'app-card-detail',
  templateUrl:'./card-detail.component.html',
  styleUrls:['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit, OnDestroy{
  cards: Card[] = [];
  private cardSubs: Subscription;
  constructor(public cardsService: CardService) {}

  ngOnInit() {
    this.cards = this.cardsService.getPosts();
    this.cardSubs =  this.cardsService.getCardUpdatedListener()
    .subscribe((cards: Card[]) => {
      this.cards = cards;
    })
  }

  ngOnDestroy() {
    this.cardSubs.unsubscribe();
  }
}
