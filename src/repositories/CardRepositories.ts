import { EntityRepository, Repository } from "typeorm";
import { Card } from "../entities/Card";

@EntityRepository(Card)
class CardRepositories extends Repository<Card>{ }

export { CardRepositories };