import { inject, Service } from '@angular/core';
import { BackendService } from '../../../shared/services/backend-service';
import { CrudService } from '../../../shared/base/crud-service';
import { CategoryAddRequest } from '../models/category-add-request';
import { CategoryEditRequest } from '../models/category-edit-request';

@Service()
export class CategoryService extends CrudService<CategoryAddRequest, CategoryEditRequest> {
  override apiName = "Categories";

}
