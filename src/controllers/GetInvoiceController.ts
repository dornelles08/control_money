import { Request, Response } from "express";
import { GetInvoiceService } from "../services/GetInvoiceService";

class GetInvoiceController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { id } = request.params;
    const { month } = request.query;

    const getInvoiceService = new GetInvoiceService();

    const registers = await getInvoiceService.execute({
      user_id,
      month: parseInt(<string>month),
      card_id: id
    });

    return response.json(registers);
  }
}

export { GetInvoiceController }