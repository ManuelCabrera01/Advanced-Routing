import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact-overview',
  templateUrl: './contact-overview.component.html',
  styleUrls: ['./contact-overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactOverviewComponent implements OnInit {
  contact: any;
  optionalParameter: string;

  constructor(
    private route: ActivatedRoute,
    private ContactServiceService: ContactServiceService
  ) { }

  ngOnInit() {
      this.route.params
        .subscribe((params) => {
          this.contact = this.ContactServiceService.get(+params['id']);
      });

      this.route.queryParams
        .subscribe((queryParams) => {
          this.optionalParameter = queryParams['foo'];
      });
    }
  }
