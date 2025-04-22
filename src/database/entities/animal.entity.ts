import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { FeedEntity } from "./feed.entity";
import { Column, OneToMany } from "typeorm";
import { ZoneEntity } from "./zone.entity";
import { HabitadEntity } from "./habitad.entity";
import { AnimalCellEntity } from "./animalCell.entity";


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

    @OneToMany(() => FeedEntity, (feed) => feed.animal)
    feed: FeedEntity[]

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
