import { Request, Response } from "express";
import { ListCategoryService } from "../services/ListCategoryService";

class ListCategoryController {
  async handle(request: Request, response: Response) {
    const { type } = request.query;

    const listCategoryService = new ListCategoryService();

    const category = await listCategoryService.execute({
      type: <string> type
    });

    return response.json(category);
  }
}

export { ListCategoryController };