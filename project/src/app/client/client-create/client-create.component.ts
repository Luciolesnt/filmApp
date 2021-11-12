import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private clientService: ClientService, private router: Router) { 
    this.clientForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)])
    })
   }

  ngOnInit(): void {
  }

  sendForm(): void {
    if(this.clientForm.valid){
      this.clientService.createClient(this.clientForm.value)
      .subscribe((_)=>{
        this.router.navigate(['../client']);
      })
    }
  }

}
