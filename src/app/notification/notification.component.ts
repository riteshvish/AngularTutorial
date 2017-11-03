import { Component, OnInit } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications'; //import the service
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  title = 'Web push Notifications!';

 constructor(private _pushNotifications: PushNotificationsService){
   _pushNotifications.requestPermission(); // request for permission as soon as component loads
 }

 notify(){ //our function to be called on click
   let options = { //set options
     body: "The truth is, I'am Iron Man!",
     icon: "assets/images/ironman.png", //adding an icon
     silent:false,
     onclick:function(){
       console.log("notification click")
     }
   }
   let notify = this._pushNotifications.create('Iron Man', options).subscribe(
      (res: any) => {console.log(res['notification']),
      res['notification']['onclick'] = this.event},
      (err:any) => console.log(err)
      );
 }

 event(){
   console.log(this.notify)
  //  console.log(res)
 //Whatever you want to do once push notification is clicked --
 // window.open("http://localhost:3000/");
 // alert("click")
 }
  ngOnInit() {
    // this.notify();
  }

}
