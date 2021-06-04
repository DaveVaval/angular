import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  cols: any[];

  inputValue = "";

  display: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Call Api pour fetch le data
    // this.http.get(" Passer par Ngrok pour acceder au api qui roule sur le mac")
    // .toPromise()
    // .then(res =>...)

    this.cols = [
      { field: 'title', header: 'Title'},
      { field: 'completed', header: 'Completed'},
      { field: 'date', header: 'Due Date'}
    ]
  }

  showDialog() {
    this.display = true;
  }
  // Fonction pour créer un nouveau todo
  createTodo() {

  }

  // Fonction pour update un todo
  updateTodo() {
    
  }
}
