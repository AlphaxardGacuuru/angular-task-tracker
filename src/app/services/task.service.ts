import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Task } from "../Task"

  const httpOptions = {
	headers: new HttpHeaders({
		"Content-Type": "application/json"
	})
  }

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:5000/tasks"

  getTasks(): Observable<Task[]> {
	return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
	return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }

  updateTaskReminder(task: Task): Observable<Task> {
	const url = `${this.apiUrl}/${task.id}`

	return this.http.put<Task>(url, task, httpOptions)
  }

  deleteTask(task: Task): Observable<Task> {
	const url = `${this.apiUrl}/${task.id}`
	
	return this.http.delete<Task>(url)
  }
}
