import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ContactsService } from "../contacts.service";

@Component({
  selector: "app-contact-create",
  templateUrl: "./contact-create.component.html",
  styleUrls: ["./contact-create.component.css"],
})
export class ContactCreateComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
  });

  constructor(private contactsService: ContactsService, private router: Router) {}

  createContact(): void {
    this.contactsService.createContact(this.contactForm.value).subscribe((contact) => {
      this.router.navigate(["/contacts"]);
    });
  }

  ngOnInit(): void {}
}
