import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cart } from "./Cart";

@Index("uq_user_email", ["email"], { unique: true })
@Entity("user", { schema: "aplikacija" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", { name: "email", unique: true, length: 100 })
  email: string;

  @Column("varchar", { name: "password_hash", length: 128 })
  passwordHash: string;

  @Column("varchar", { name: "forename", length: 64 })
  forename: string;

  @Column("varchar", { name: "surname", length: 64 })
  surname: string;

  @Column("varchar", { name: "phone_number", length: 24 })
  phoneNumber: string;

  @Column("text", { name: "postal_adress" })
  postalAdress: string;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];
}
