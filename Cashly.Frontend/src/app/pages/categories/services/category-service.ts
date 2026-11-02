import { inject, Service } from '@angular/core';
import { BackendService } from '../../../shared/services/backend-service';

@Service()
export class CategoryService  {
  backend= inject(BackendService);


  list(){
    this.backend.get("api/CategoriesApi/list").subscribe(res=>{
      console.log(res);
      console.log("working");
    });
  }
}
