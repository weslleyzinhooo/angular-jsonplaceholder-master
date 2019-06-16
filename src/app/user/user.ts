import { Address } from "./address";
import { Company } from "./company";

export interface User {
  id: number;
  name: String;
  username: String;
  email : String;
  address : Address;
  phone : String;
  website : String;
  company : Company;
}
