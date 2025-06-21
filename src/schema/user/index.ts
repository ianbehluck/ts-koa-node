import { Column, DataType, Table, Length } from 'sequelize-typescript'
import BaseModel from '@/schema/baseModal'

@Table({
  tableName: 'user',
  paranoid: false   // 禁用软删除
})
export default class User extends BaseModel {

  @Column({
    type: DataType.STRING,
    comment: '唯一id，全平台使用'
  })
  declare uuid: string

  @Length({
    min: 2,
    max: 10,
    msg: 'password must between 8 to 12 characters'
  })
  @Column({
    type: DataType.STRING,
    comment: '密码'
  })
  declare password: string

  @Column({
    type: DataType.STRING,
    comment: 'telegram id'
  })
  declare tgid: string

  @Column({
    type: DataType.STRING,
    comment: '手机号'
  })
  declare phone: string

  @Column({
    type: DataType.STRING,
    comment: '名'
  })
  declare firstName: string

  @Column({
    type: DataType.STRING,
    comment: '姓'
  })
  declare lastName: string

  @Column({
    type: DataType.STRING,
    comment: '昵称，默认名+姓'
  })
  declare nickName: string

  @Column({
    type: DataType.INTEGER,
    comment: '性别 0 女   1 男'
  })
  declare sex: string

}