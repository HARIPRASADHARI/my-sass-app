import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styles:[``]
  })
  export class ServersComponent implements OnInit {
    
    allowNewServer:boolean=false;
    serverCreation:string='No server was craeted';
    constructor() {
        setTimeout(()=>{
            this.allowNewServer=true;
        },2000)
     }
  
    ngOnInit() {
    }
    onCreateServer(){
      this.serverCreation="server created";
    }
    onUpdateServer(){
      
    }

  
  }