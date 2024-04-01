export interface MemberData {
  name: string;
  surname: string;
  class: number | null;
  id: number | null;
  sex: string;
  birthday: string;
  address: string;
  phone: string;
  email: string;
}

export interface Timetable {
  id: number;
  name: string | null;
  date: Date;
}
export interface Equipment {
  id: number;
  name: string;
  surname: string;
  class: number;
}
