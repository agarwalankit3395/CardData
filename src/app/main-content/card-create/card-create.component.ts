import { Component, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import  { Card } from '../card.model';
import { CardService } from "../card.service";

@Component({
  selector:'app-card-create',
  templateUrl:'./card-create.component.html',
  styleUrls:['./card-create.component.css']
})

export class CardCreateComponent {

  CardData = new EventEmitter<Card>();

  constructor(public cardsService: CardService) {}

  onAdding(form: NgForm) {
    if(form.invalid) {
      return;
    }

    this.cardsService
      .addPost(
        form.value.cardNumber,
        form.value.cardHolderName,
        form.value.cardExpiry,
        form.value.cardSecurityCode,
        form.value.amount
        );
    form.resetForm();
  }
}
