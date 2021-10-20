import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-form',
  templateUrl: './mat-form.component.html',
  styleUrls: ['./mat-form.component.css']
})
export class MatFormComponent implements OnInit {
  myform:FormGroup;
  msg:string='';
  registerStatus:boolean=false;
  constructor(private formBuilder:FormBuilder) {
    this.myform=formBuilder.group({
      name:['',[
        Validators.required,
      ],
      ],
      email:['',[
        Validators.required,
      ],
      ],
      mobile:['',[
        Validators.required,
      ],
      ],
      course:['',[
        Validators.required,
      ],
      ]    
    })
   }

   register(){
     if(this.myform.valid){
       this.msg="Registration successfull";
       this.registerStatus=true;
     }else{
       this.msg="Registration failed";
       this.registerStatus=false;

     }
   }
   reset(){
     this.msg="";
   }

  ngOnInit(): void {
  }

}
