import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactEditComponent implements OnInit {
  originalContact: any;
  editContact: any;

  constructor(
    private route: ActivatedRoute,
    private ContactServiceService: ContactServiceService
  ) { }

  ngOnInit() {
    let paramId = +this.route.snapshot.parent.params['id'];
    this.originalContact = this.ContactServiceService.get(paramId);
    this.editContact = {
      id: this.originalContact.id,
      name: this.originalContact.name
    };
  }

  save() {
    this.originalContact = this.ContactServiceService.edit(this.editContact);
  }
}
