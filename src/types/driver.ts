import { User } from "./user";

interface Assignment {
  line: string;
  period: string;
  status: string;
}

interface Record {
  hours: string;
  averageDay: string;
}

export interface Driver extends User {
    ci: string;
    phone: string;
    carDescription: string;
    carId: string;
    assignment?: Assignment;
    record?: Record;
    createdAt: Date;
}