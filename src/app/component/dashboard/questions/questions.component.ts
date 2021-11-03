import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questionList:any=[];
  currentQuestion = 0;
  points:number = 0;
  counter = 60;
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.getQuestions();
    //this.startCounter();
  }
  getQuestions(){
    this.questionService.getQuestions()
    .subscribe(res=>{
      this.questionList = res.questions;
      console.log(this.questionList);
    })
  }
  nextQuestion(index:number){
    this.currentQuestion++
  }
  previousQuestion(){
    this.currentQuestion--;
  }
  answer(questionNo:number,option:any){

    if(option.correct){ 
      this.points +=10;
      setTimeout(() => {
        this.currentQuestion++;
      }, 3000);
    }else{
      setTimeout(() => {
        this.currentQuestion++;
      }, 3000);
      this.points -=10;
    }
  }
  // startCounter(){
  //   interval(1000)
  //   .subscribe(val=>{
  //     this.counter--
  //     if(this.counter===0){
  //       this.currentQuestion++
  //       this.points-=10;
        
  //     }
  //   })
  // }
}
