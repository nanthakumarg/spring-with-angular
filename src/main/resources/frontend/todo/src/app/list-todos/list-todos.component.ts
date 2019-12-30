import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  // ]

  todo = {
    id : 1,
    description: 'Lean to Dance'
  }

  message: string

  constructor(
    private todoService:TodoDataService,
    private router: Router,
    private basicAuthService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos(this.basicAuthService.getAuthenticatedUser()).subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id) {
    this.todoService.deleteTodo(this.basicAuthService.getAuthenticatedUser(), id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    this.router.navigate(['todos',id]);
  }

  addTodo() {
    this.router.navigate(['todos',-1]);
  }

}
