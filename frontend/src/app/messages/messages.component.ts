import { Component, OnInit } from '@angular/core';
import { WebService} from '../web.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messages = [];
  constructor(private webService: WebService, private route: ActivatedRoute) { }

  async ngOnInit() {
  console.log(this.route.snapshot.params.name);
  }



}
