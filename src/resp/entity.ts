import { BaseEntity, PrimaryGeneratedColumn, Column, Entity  } from 'typeorm'


@Entity()
export class Responses extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('int', {nullable: true})
  userId: number

  @Column('int', {nullable: true})
  quizId: number

  @Column('json', {nullable: true})
  input: any

  @Column('int', {nullable: true})
  score: number
}

@Entity()
export class Questions extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable:false})
    question: string

    @Column('text', {nullable:true})
    A: string

    @Column('text', {nullable:true})
    B: string

    @Column('text', {nullable:true})
    C: string

    @Column('text', {nullable:true})
    D: string

    @Column('text', {nullable:false})
    correctAnswer: string

    @Column('integer')
    quizId: number
}