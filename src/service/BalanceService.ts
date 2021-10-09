import { getCustomRepository } from "typeorm";
import { Category } from "../entities/Category";
import { CategoryRepositories } from "../repositories/CategoryRepositories";
import { ReleaseRepositories } from "../repositories/ReleaseRepositories";


class BalanceService {


  async execute() {

    const categoryRepositories = getCustomRepository(CategoryRepositories)
    const releaseRepositories = getCustomRepository(ReleaseRepositories)

    const categories = await categoryRepositories.find()
    const releases = await releaseRepositories.find()


    //  implementar solução

  }

}
export { BalanceService }