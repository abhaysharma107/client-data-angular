import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { saveAs } from "file-saver";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CilentDataService {

  constructor(private http:HttpClient) { }

  addData(payload:any){
    return this.http.post<any>(`${environment.url + 'client-info'}`, payload)
  }

  pdf(){
    return this.http.get<any>(`${environment.url + 'client-info'}`, { responseType: 'blob' as 'json'}).pipe(
      map((res: any) => {
        console.log(res);

        saveAs(res, "file");
        return true;
      })
    );
  }
}
