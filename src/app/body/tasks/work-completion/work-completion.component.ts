import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-work-completion',
  templateUrl: './work-completion.component.html',
  styleUrls: ['./work-completion.component.css']
})
export class WorkCompletionComponent implements OnInit {
  @Input('workDone') workDone:number
  data=[]
  constructor() { }

  ngOnInit(): void {
   this.createPieChartData()
   
  }
  createPieChartData(){
    this.data=[
      ["Completed",this.workDone],
      ["In Progress",100-this.workDone]
    ]
  }

}
