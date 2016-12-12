import { Component } from '@angular/core';
import { ChatService } from './chat.service'

@Component({
  selector: 'chat',
  template: `<h2>chat</h2>`,
  providers: [ChatService]
})

export class Chat { }
