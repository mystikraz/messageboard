import { Component, OnInit } from '@angular/core';
import { WebService} from '../web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  messages = [];
  
  constructor(private webService: WebService) { }
 
  async ngOnInit() {
   var response=await this.webService.getMessages();
  //  console.log(response.json());
    this.messages=response.json();
  }

  

}
