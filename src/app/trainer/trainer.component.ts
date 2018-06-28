import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainerId } from '../models/trainer.model';
@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})

export class TrainerComponent implements OnInit {
  
  mid:TrainerId[] = [
 
      {id: 1,name: 'married'},
      {id: 2, name: 'single'}
      ];
  
  constructor() { }

  ngOnInit() {


  }
  onSubmit(f: NgForm) {
    console.log("gauri",f.valid);  
    console.log(f.value);
    console.log(f.valid);  
    console.log(f.valid); 
   console.log(f.valid); 

}
}




