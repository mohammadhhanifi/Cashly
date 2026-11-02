import { inject } from "@angular/core";
import { BackendService } from "../services/backend-service";

export class CrudService<TAddRequest, TEditRequest,> {
  backend = inject(BackendService);
  apiName = '';

  add(data: TAddRequest) {
    return this.backend.post(`api/${this.apiName}Api/add`, data);
  }
  edit(data: TEditRequest,id:number) {
    return this.backend.put(`api/${this.apiName}Api/edit/${id}`, data);
  }
  list() {
    return this.backend.get(`api/${this.apiName}Api/list`);
  }
  remove(id:number) {
    return this.backend.delete(`api/${this.apiName}Api/delete/${id}`);
  }
}
