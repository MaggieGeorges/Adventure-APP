import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private messages: string[] = [
    'Hi, how are you doing?',
    'Coding with Angular is awesome!',
    'Welcome here, you will love it.',
    'Happy Coding!!!'
  ];

  getRandomMessage(): string{
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    return this.messages[randomIndex];
  }
}
