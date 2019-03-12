import { Component, OnInit } from '@angular/core';
import { DataServiceService} from '../data-service.service';
import { Phonebook }    from '../phonebook';

@Component({
  selector: 'app-view-phone-number',
  templateUrl: './view-phone-number.component.html',
  styleUrls: ['./view-phone-number.component.scss']
})
export class ViewPhoneNumberComponent implements OnInit {

  contactList: Object;
  constructor(private data : DataServiceService) { }

  ngOnInit() {
    this.data.getPhoneBookList();
    
  }
}
