import { v4 as uuidv4 } from 'uuid'
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript'

class BaseModel extends Model {
  @PrimaryKey
  @Column({
    // type: DataType.UUID, // 使用 UUID 类型
    // defaultValue: () => uuidv4().replace(/-/g, ''),
    type: DataType.INTEGER,
    primaryKey: true, // 设置为主键
    autoIncrement: true, //自增长
    allowNull: false, // 不允许为空
  })
  declare id: string

  @CreatedAt
  @Column({
    type: DataType.DATE,
    comment: '创建时间'
  })
  declare create_time: Date | null

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    comment: '修改时间'
  })
  declare update_time: Date | null

}

export default BaseModel