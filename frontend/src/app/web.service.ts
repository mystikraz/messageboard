import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:1234/api';

  messages = [];

  constructor(private http: Http, private sb: MatSnackBar) {
    this.getMessages();
  }
  async getMessages() {
    try {
      const response = await this.http.get(this.BASE_URL + '/messages').toPromise();
      this.messages = response.json();
    } catch (error) {
      this.handleError('Unable to get messages');
    }

 }
   private handleError(error) {
    console.error(error);
    this.sb.open(error, 'close', {duration: 5000});
  }
  async postMessage(message) {

    try {
      const response = await this.http.post(this.BASE_URL + '/message', message).toPromise();
      this.messages.push(response.json());
    } catch (error) {
      this.handleError('unable to Post the message');
    }
  }
}
