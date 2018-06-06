import { BaseEntity, PrimaryGeneratedColumn, Column, Entity  } from 'typeorm'


@Entity()
export default class Responses extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('int')
  userId: number

  @Column('int')
  quizId: number

  @Column('json')
  answers: string[][] 

  @Column('text')
  score: string
}