
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Timestamp } from "typeorm"


@Entity()
export class IdentityNumber {
    @PrimaryGeneratedColumn('uuid')
    uuid?: string

    @Column({name: 'identity_document'})
    identityDocument: number

    @Column({name:'missing_number'})
    missingNumber: number

    @CreateDateColumn({name:'create_date'})
    createDate?: Timestamp
}