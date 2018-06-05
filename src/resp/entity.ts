import { BaseEntity, PrimaryGeneratedColumn, Column, Entity  } from 'typeorm'


@Entity()
export default class Responses extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('json')
  answers: string[][] 
}