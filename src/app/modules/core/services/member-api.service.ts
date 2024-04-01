import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.develop';
import { Equipment, MemberData, Timetable } from '../models/members-models';
import { Observable, tap } from 'rxjs';
import { MemberService } from './member.service';
import { Docs } from '../models/docs-model';

@Injectable({
  providedIn: 'root',
})
export class MemberApiService {
  BackendUrl = environment.apiUrl;
  constructor(private http: HttpClient, private memberService: MemberService) {}

  getDate(): Observable<MemberData[]> {
    return this.http
      .get<MemberData[]>(`${this.BackendUrl}/members`)
      .pipe(tap((member) => (this.memberService.data = member)));
  }
  editMember(id: number | null, member: MemberData): Observable<MemberData> {
    return this.http.patch<MemberData>(
      `${this.BackendUrl}/members/${id}`,
      member
    );
  }
  getMember(id: number): Observable<MemberData> {
    return this.http.get<MemberData>(`${this.BackendUrl}/members/${id}`);
  }
  addMember(member: Omit<MemberData, 'id'>): Observable<MemberData> {
    return this.http
      .post<MemberData>(`${this.BackendUrl}/members/`, member)
      .pipe(tap((member) => this.memberService.addMember(member)));
  }
  addDocs(newDocs: Omit<Docs, 'id'>): Observable<Docs> {
    return this.http.post<Docs>(`${this.BackendUrl}/docs/`, newDocs);
    // .pipe(tap((member) => this.memberService.addMember(member)));
  }
  addTimetables(timetable: Omit<Timetable, 'id'>): Observable<Timetable> {
    return this.http.post<Timetable>(
      `${this.BackendUrl}/timetable/`,
      timetable
    );
  }
  addEqimpentMember(equipment: Omit<Equipment, 'id'>, source: string) {
    return this.http.post(`${this.BackendUrl}/${source}`, equipment);
  }
  deleteMember(id: number | null): Observable<any> {
    return this.http.delete(`${this.BackendUrl}/members/${id}`);
  }
  deleteDoc(id: number | null): Observable<any> {
    return this.http.delete(`${this.BackendUrl}/docs/${id}`);
  }
  deleteEqimpentMember(id: number, source: string) {
    return this.http.delete(`${this.BackendUrl}/${source}/${id}`);
  }

  getDocs(): Observable<Docs[]> {
    return this.http.get<Docs[]>(`${this.BackendUrl}/docs`);
  }
  geTimetables(): Observable<Timetable[]> {
    return this.http.get<Timetable[]>(`${this.BackendUrl}/timetable/`);
  }
  getEquipment(type: string): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.BackendUrl}/${type}`);
  }
  deleteTimetable(id: number | null): Observable<any> {
    return this.http.delete(`${this.BackendUrl}/timetable/${id}`);
  }
}
