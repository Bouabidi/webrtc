import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../services/socket.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private users = [];
    private token: string;
    private user:any;

     private messages: any = [];
     private message: string;
     private connection: any;


   


    constructor(
        private router: Router,
        private socketService: SocketService,
 

    ) {
    }

    ngOnInit() {
        // subscribe users - only one time
        this.socketService.users(this.token).subscribe(users => {
            this.users = users;
        })
        // subscribe user join
        this.socketService.join().subscribe(user => {
            let index = this.users.indexOf(user);
            if (index <= -1) {
                this.users.push(user);
            }
        })
        // subscribe user leave
        this.socketService.leave().subscribe(user => {
            let index = this.users.indexOf(user);
            if (index > -1) {
                this.users.splice(index, 1);
            }
        })
        this.connection = this.socketService.getMessages().subscribe(message => {
          console.log(message);
          this.messages.push(message);
    });

  }

  sendMessage() {
    this.socketService.sendMessage(this.message, this.token);
    this.message = '';
  }

}
