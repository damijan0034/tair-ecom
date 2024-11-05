import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("administrator_unique", ["username"], { unique: true })
@Entity("administrator", { schema: "aplikacija" })
export class Administrator {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "administrator_id",
    unsigned: true,
  })
  administratorId: number;

  @Column("varchar", { name: "username", unique: true, length: 100 })
  username: string;

  @Column("varchar", { name: "password_hash", length: 100 })
  passwordHash: string;
}
