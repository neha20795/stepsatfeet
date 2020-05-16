import { Address } from '../models/address';

export interface Employeer {
  organization_name : string,
  registration_date : Date,
  email : string,
  password : string,
  certification_type : string,
  director : string[],
  ceo : string,
  address : Address,
  contact : string[],
  employeeCapacity : number,
  safetyRating : number,
  photos : string[]
}
