import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment';

@Service()
export class BackendService {
  http = inject(HttpClient);

  get(api: string) {
    return this.http.get(environment.apiUrl + api)
  }
}
