import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { FeedEntity } from "./feed.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { ZoneEntity } from "./zone.entity";
import { HabitadEntity } from "./habitad.entity";
import { AnimalCellEntity } from "./animalCell.entity";
import { AnimalFeed } from "./animalFeed.entity";

@Entity('animal')
export class AnimalEntity extends EntityAbstract {

    @Column({ type: 'varchar' })
    name: string

    @Column({ type: 'varchar' })
    species: string

    @Column({ type: 'varchar' })
    age: string

    @Column({ type: 'varchar' })
    weight: string

    @Column({ type: 'int' })
    feedId: number

    @OneToMany(() => AnimalFeed, (animalFeed) => animalFeed.animal)
    animalFeed: AnimalFeed


    @Column({ type: 'int' })
    zoneId: number

    @OneToMany(() => ZoneEntity, (zone) => zone.animal)
    zone: ZoneEntity[]

    @Column({ type: 'int' })
    habitadId: number

    @OneToMany(() => HabitadEntity, (habitat) => habitat.animal)
    habitad: HabitadEntity[]



    @OneToMany(() => AnimalCellEntity, (animalCell) => animalCell.animal)
    animalCell: AnimalCellEntity[]
}
