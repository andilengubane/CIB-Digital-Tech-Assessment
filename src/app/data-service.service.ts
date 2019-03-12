import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import { map } from 'rxjs/operators';
import { Phonebook }    from './phonebook';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  PhoneBookSelected: Phonebook;
  phonebookList : Phonebook[];

  constructor(private http: Http) { }

  
  getPhoneBookList(){
    this.http.get('http://localhost:55471/api/PhoneBook/GetAllContact').pipe(map((data : Response) => {
    return data.json() as Phonebook[];})).toPromise().then( x => { this.phonebookList = x;});
  }

  postEmployee(contact:Phonebook){
    var body = JSON.stringify(contact);
    var headerOptions = new Headers({'Content-Type': 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers:headerOptions});
    var body = JSON.stringify(contact);
    return this.http.post('http://localhost:55471/api/PhoneBook/SavePhoneBook',body,requestOptions).pipe(map(x=>x.json()));

  }
  
}

