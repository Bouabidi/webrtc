import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { Notification } from '../services/socket.service';
import { AppSettingsService } from '../services/app.settings.service';

declare var Peer: any;

@Component({
    selector: 'app-stream',
    templateUrl: './stream.component.html',
    styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

    @ViewChild('remoteVideo') remoteVideoRef: any;
    @ViewChild('localVideo') localVideoRef: any;

    private peer: any;
    private userid: string = '';
    private localStream: any;
    private playing: boolean = false;


    private messages1: any = [];
    private message1: string;
    private connection: any;

    constructor(
        private appSettingsService: AppSettingsService,
        private socketService: SocketService,
        private route: ActivatedRoute,

    ) {
        // local peer
        this.peer = socketService.peer;
    }

    ngOnInit() {
        this.route.params
            .subscribe((params) => {
                this.userid = params['userid'];
            })
           this.connection = this.socketService.getPrivatMessages().subscribe(message1 => {
          console.log(message1);
          this.messages1.push(message1);
    });
    
    }

   

    call() {
        this.playing = true;
        this.socketService.call(this.userid);
        let localVideo = this.localVideoRef.nativeElement;
        let n = <any>navigator;
        let self = this;
        n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
        n.mediaDevices.getUserMedia({ video: true, audio: true }).then(function (stream) {
            // ref to close
            self.localStream = stream;
            localVideo.srcObject = stream;
            localVideo.play();
        })
    }


    sendPrivateMessage() {
    this.socketService.sendPrivatMessage(this.message1, this.userid);
    this.message1 = '';
      }

}
