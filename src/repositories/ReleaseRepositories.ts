import { Repository, EntityRepository } from "typeorm";
import { Release } from "../entities/Release";


@EntityRepository(Release)
class ReleaseRepositories extends Repository<Release>{ }

export { ReleaseRepositories }

