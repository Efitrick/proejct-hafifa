
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Timestamp } from "typeorm"


@Entity()
export class IdentityNumber {
    @PrimaryGeneratedColumn('uuid')
    uuid?: string

    @Column({name: 'identity_document'})
    identityDocument: string

    @Column({name:'missing_number'})
    missingNumber: string

    @CreateDateColumn({name:'create_date'})
    createDate?: Timestamp
}