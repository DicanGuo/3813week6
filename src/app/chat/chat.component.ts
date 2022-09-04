import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string = '';
  errorMassage: string = '';
  chats = [
    {'user':'dican', 'message': 'first post'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  post(){

  }
}
