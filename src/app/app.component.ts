import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';

  list:any[]=[];

  addTask(item : String){

    console.warn(item)
    this.list.push({id:this.list.length, name:item})
    console.warn(this.list)

     //for clrearing the input text
    item = '';
  }

  removeTask(id:number){
    console.warn(id)
    this.list = this.list.filter(item=> item.id!== id)
  }
}



