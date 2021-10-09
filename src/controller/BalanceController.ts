import { Request, Response } from "express";
import { BalanceService } from "../service/BalanceService";

class BalanceController {

  async handle(request: Request, response: Response) {

    const balanceService = new BalanceService()

    const result = await balanceService.execute()

    return response.status(200).json(result)
  }


}

export { BalanceController };

