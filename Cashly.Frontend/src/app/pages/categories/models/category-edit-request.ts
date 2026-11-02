import { CategoryType } from "../enums/category-type";

export interface CategoryEditRequest {
  Type: CategoryType;
  Title: string;
  Icon: string;
  Color: string;
}
