import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class RegisterPageForm {

    private formBuilder: FormBuilder;
    //private form: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
       // this.form = this.createForm();
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
        //return form;
    }

    /*getForm() : FormGroup{
        return this.form;
    }*/
}