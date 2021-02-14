import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/etc/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  constructor(
    private agent_service:AgentService
  ) { }

  ngOnInit(): void {
  }

  name:string="";
  page:string="Agent"

  onSubmit(){
    this.agent_service.createAgent(this.name).then(result=>{
      alert("Success");
    }).catch(err=>{
      alert("Error");
      console.log(err);
    })
  }
}
