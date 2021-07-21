import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../repositories/CategoriesRepositories";

interface ICategoryRequest {
  type: string;
}

class ListCategoryService {
  async execute({ type }: ICategoryRequest) {
    const categoriesRepository = getCustomRepository(CategoriesRepositories);

    const options = {};

    if (type) {
      options["type"] = type;
    }

    const category = categoriesRepository.find(options);
    return category;
  }
}

export { ListCategoryService };