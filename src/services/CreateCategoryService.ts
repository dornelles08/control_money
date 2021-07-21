import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../repositories/CategoriesRepositories";

interface ICategoryRequest {
  name: string;
  type: string;
}

class CreateCategoryService {
  async execute({ name, type }: ICategoryRequest) {
    const categoriesRepository = getCustomRepository(CategoriesRepositories);

    if (!name) {
      throw new Error("Name incorrect");
    }

    if (type !== "entrada" && type !== "saida") {
      throw new Error("Type incorrect");
    }

    const categoryAlreadyExists = await categoriesRepository.findOne({
      name,
    });

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    const category = categoriesRepository.create({
      name,
      type
    });

    await categoriesRepository.save(category);

    return category;
  }
}

export { CreateCategoryService };