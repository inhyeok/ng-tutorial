import { Component } from '@angular/core'

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
    <form (ngSubmit)="sendMessage()" #chatForm="ngForm">
      <textarea [(ngModel)]="message" name="message" required></textarea>
      <button type='submit' [disabled]="!chatForm.form.valid">보내기</button>
    </form>
  `
})

export class ChatComponent {
  message_list:Object[] = []
  message:string = ''

  sendMessage() {
    console.log('send Message submit!!', this.message)
    let data = {
      'user_id': 1,
      'text': this.message
    }
    this.addMessage(data)
    // todo: socket send Message
    return false
  }
  addMessage(data) {
    console.log('add Message', data)
    this.message_list.push(data)
    this.message = ''
    return true
  }
}
