import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { AnimalEntity } from "./animal.entity";
import { HabitadEntity } from "./habitad.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('zone')
export class ZoneEntity extends EntityAbstract {

    @Column({ type: 'varchar' })
    name: string

    @Column({ type: 'varchar' })
    description: string

    @Column({ type: 'varchar' })
    location: string

    @Column({ type: 'int' })
    animalId: number

    @ManyToOne(() => AnimalEntity, (animal) => animal.zone)
    animal: AnimalEntity

    @Column({ type: 'int' })
    habitatId: number

    @ManyToOne(() => HabitadEntity, (habitat) => habitat.zone)
    habitat: HabitadEntity
}
