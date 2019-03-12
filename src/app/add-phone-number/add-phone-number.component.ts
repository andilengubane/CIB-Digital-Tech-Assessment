import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { Phonebook }    from '../phonebook';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-phone-number',
  templateUrl: './add-phone-number.component.html',
  styleUrls: ['./add-phone-number.component.scss']
})

export class AddPhoneNumberComponent implements OnInit {
  constructor(private dataService: DataServiceService,private toastr: ToastrService) { }

  PhoneBookSelected = new Phonebook();

  ngOnInit() {

  }
 
onSubmit(form: NgForm){
  this.dataService.postEmployee(form.value).subscribe();
  this.toastr.success('Contact create successfully', 'done!');
 }
}


