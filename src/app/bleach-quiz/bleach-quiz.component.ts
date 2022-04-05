import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bleach-quiz',
  templateUrl: './bleach-quiz.component.html',
  styleUrls: ['./bleach-quiz.component.css']
})
export class BleachQuizComponent implements OnInit {

  obj:any = {


  }
  count:number = 0;
  formHidden:boolean=false;
  QuizResult:boolean = true;
 readonly quiz = 'quizResult'


 handlesave(){
  localStorage.setItem(this.quiz,JSON.stringify(this.obj))
}

  constructor() { }


  GetForm(Solution:NgForm){
    this.obj = Solution
    console.log(Solution.value)
      
    if (Solution.value?.q1 ==="Orange" ){
      this.count++
      
   }
     if (Solution.value?.q2 ==="zangetsu") {
      this.count++
      
   }
     if (Solution.value?.q3 ==="soul-reaper") {
      this.count++
      
   }
    else if(Solution.value?.q3 ==="chicken-nugget"){
      this.count--
     }
  
    this.formHidden=true;
    this.QuizResult =false;


  }


    

  ngOnInit(): void {
    let savedQuizJson = localStorage.getItem(this.obj);
    if(savedQuizJson != null){
      this.obj = JSON.parse(savedQuizJson);
    }
    
  }

}
