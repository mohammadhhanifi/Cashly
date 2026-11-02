import { CategoryType } from "../enums/category-type";

export interface CategoryAddRequest {
  Type: CategoryType;
  Title: string;
  Icon: string;
  Color: string;
}
