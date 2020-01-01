import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAssignment';
  userName: string = "";
  serverCreationStatus = "No Server was Created";
  serverCreated=false;

  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus = "Server was Created! Name is " + this.userName;
  }
}
