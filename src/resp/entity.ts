import { BaseEntity, PrimaryGeneratedColumn, Column, Entity  } from 'typeorm'


@Entity()
export class Responses extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('int' )
  userId: number

  @Column('int')
  quizId: number

  @Column('json')
  input: string[][]

  @Column('text', {nullable: true})
  score: string
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