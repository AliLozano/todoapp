import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, map, Observable} from "rxjs";
import {TasksResponse, Task} from "./interfaces";


@Injectable({
  providedIn: 'root'
})
export class TasksAPIService {

  constructor(private httpClient: HttpClient) {
  }

  async getTasks(): Promise<Task[]> {
    const response = await firstValueFrom(this.httpClient.get<TasksResponse>('https://api.airtable.com/v0/appqD6eBxxY65Joqn/Tasks?maxRecords=100&view=Grid%20view', {
      headers: {
        Authorization: 'Bearer keyJZUGC9aq6uKfqd'
      }
    }))
    return response.records.map((it) => {
      return {title: it.fields.Name, done: it.fields.Status === 'Done'}
    });
  }


  /*
  getTasks(): Observable<Task[]> {
    const response = this.httpClient.get<TasksResponse>('https://api.airtable.com/v0/appqD6eBxxY65Joqn/Tasks?maxRecords=100&view=Grid%20view', {
      headers: {
        Authorization: 'Bearer keyJZUGC9aq6uKfqd'
      }
    })

    return response.pipe(map((it) => {
      return it.records.map((it) => {
        return {title: it.fields.Name, done: it.fields.Status === 'Done'}
      });
    }))
  }
  */

}
