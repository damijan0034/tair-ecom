import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cart } from "./Cart";

@Index("order_cart_id_IDX", ["cartId"], { unique: true })
@Entity("order", { schema: "aplikacija" })
export class Order {
  @PrimaryGeneratedColumn({ type: "int", name: "order_id", unsigned: true })
  orderId: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("int", { name: "cart_id", unique: true, unsigned: true })
  cartId: number;

  @Column("enum", {
    name: "status",
    enum: ["accepted", "rejected", "shipped", "pending"],
    default: () => "'pending'",
  })
  status: "accepted" | "rejected" | "shipped" | "pending";

  @OneToOne(() => Cart, (cart) => cart.order, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "cart_id", referencedColumnName: "cartId" }])
  cart: Cart;
}
