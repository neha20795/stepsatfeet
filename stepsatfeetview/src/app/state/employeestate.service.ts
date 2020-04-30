import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employeedata } from '../models/employeedata'

const INITIAL_STATE: Employeedata = {
  _id: "",
  fname: "",
  lname: "",
  dob: null,
  email: "",
  address : "",
  organization: "" ,
  qualification: null,
  mobile: "",
  experience: null,
  gender: "",
  image: ""
};



@Injectable({
  providedIn: 'root'
})
export class EmployeestateService {
  empData: Employeedata = {
    _id: "",
    fname: "",
    lname: "",
    dob: null,
    email: "",
    address : "",
    organization: "" ,
    qualification: null,
    mobile: "",
    experience: null,
    gender: "",
    image: ""
  };
  constructor() { }

  private _state = new BehaviorSubject<Employeedata>(INITIAL_STATE);

    state = this._state.asObservable();

    changeName(newData: Employeedata) {
      const oldState = this._state.getValue()
      this._state.next({ ...oldState,
        _id: newData._id,
        fname: newData.fname ,
        lname: newData.lname,
        dob:newData.dob,
        email:newData.email,
        address:newData.address,
        organization: newData.organization,
        qualification:newData.qualification,
        mobile:newData.mobile,
        experience:newData.experience,
        gender:newData.gender ,
        image: newData.image
      });
      this.empData = newData;
      console.log(oldState);
    }
}
