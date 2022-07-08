import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=
[
  {"name":"anu","age":66,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBx_P1zJcOHhpA_PDhyNMToHfAIgOdkaMUzA&usqp=CAU"},
  {"name":"fathima","age":16,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBx_P1zJcOHhpA_PDhyNMToHfAIgOdkaMUzA&usqp=CAU"},
  {"name":"anjana","age":101,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBx_P1zJcOHhpA_PDhyNMToHfAIgOdkaMUzA&usqp=CAU"},
  {"name":"varun","age":35,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBx_P1zJcOHhpA_PDhyNMToHfAIgOdkaMUzA&usqp=CAU"},
  {"name":"salashil","age":20,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBx_P1zJcOHhpA_PDhyNMToHfAIgOdkaMUzA&usqp=CAU"}
]
}
