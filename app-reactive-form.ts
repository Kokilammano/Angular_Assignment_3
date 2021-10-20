import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  myform:FormGroup;
  msg:string=""
  registerStatus:boolean=false;
  constructor(private formBuilder:FormBuilder) { 
    this.myform=formBuilder.group({
    name:['',[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ],
    ],
    email:['',[
      Validators.required,
      Validators.email,
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
  ngOnInit(): void {
  }

  onRegisterClick(){
    if(this.myform.valid){
      this.msg="Registration success";
      this.registerStatus=true;
    }else{
      this.msg="Registration failed";
      this.registerStatus=false;
    }
  }
  reset(){
    this.msg="";
  }
  

}
