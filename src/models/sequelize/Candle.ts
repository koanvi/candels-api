import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

// CreationOptional
@Table
export class Candle extends Model {
  
  
  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number;

  @Column({ type: DataType.FLOAT, })
  MTS: number;

  @Column({ type: DataType.FLOAT, })
  OPEN: number;

  @Column({ type: DataType.FLOAT, })
  CLOSE: number;

  @Column({ type: DataType.FLOAT, })
  HIGH: number;

  @Column({ type: DataType.FLOAT, })
  LOW: number;

  @Column({ type: DataType.FLOAT, })
  VOLUME: number;

  // @HasMany(() => Hobby)
  // hobbies: Hobby[];



}