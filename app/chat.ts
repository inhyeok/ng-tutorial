import { Component } from '@angular/core';
import { ChatService } from './chat.service'

@Component({
  selector: 'chat',
  template: `
    <h2>chat</h2>
    <div class="container chat">
      <div class="chat-item" *ngFor="let message of message_list">
        <small>{{message.user_id}}</small>
        <span>{{message.text}}</span>
      </div>
    </div>
    <form (ngSubmit)="sendMessage()">
      <textarea [(ngModel)]="message" name="message"></textarea>
      <button type='submit' [disabled]="!message">보내기</button>
      <button type='button' (click)="testAddMessage(message)">테스트 보내기</button>
    </form>
  `,
  providers: [ChatService]
})

export class Chat {
  message_list:any = []
  message:string = ''

  sendMessage(message) {
    console.log('send Message submit!!', message)
    // todo: socket send Message
    return true;
  }
  addMessage(data) {
    console.log('add Message', data)
    this.message_list.push(data)
    this.message = ''
    return true;
  }
  testAddMessage(message) {
    var data:any = {
      'user_id': 1,
      'text': message
    }
    this.addMessage(data)
  }
}
