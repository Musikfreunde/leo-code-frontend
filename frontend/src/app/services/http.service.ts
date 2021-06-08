import {Injectable, NgZone} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Example} from '../model/example.model';
import {Submission} from '../model/submission.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':  '*',
    })
  };

  BASE_URL = 'http://vm147.htl-leonding.ac.at/';

  constructor(private http: HttpClient,
              private _zone: NgZone) { }

  getExampleList(): Observable<Example[]> {
    return this.http.get<Example[]>(this.BASE_URL + 'example/list', this.httpOptions);
  }

  getExampleById(id: number): Observable<Example>{
    return this.http.get<Example>(this.BASE_URL  + 'example/' + id, this.httpOptions);
  }

  createExample(form: HTMLFormElement): Observable<Example>{
    return this.http.post<Example>(this.BASE_URL + 'example', new FormData(form), this.httpOptions);
  }

  testExample(form: FormData): Observable<any>{
    return this.http.post<any>(this.BASE_URL + 'submission', form, this.httpOptions);
  }

  getSubmissionStatusSse(id: number): Observable<MessageEvent> {

    return Observable.create(observer => {
      const eventSource = new EventSource(this.BASE_URL + 'submission/' + id);
      eventSource.onmessage = event => {
        this._zone.run(() => {
          observer.next(event);
        });
      };
      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }

  getFinishedSubmissions(username: string): Observable<Submission[]> {
    return this.http.get<Submission[]>(this.BASE_URL + 'submission/history/' + username, this.httpOptions);
  }
}
