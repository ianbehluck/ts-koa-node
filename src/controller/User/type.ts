import { z } from 'koa-swagger-decorator'
import { commonResponse } from '@/controller/common'

// 创建用户的请求
const CreateUserReq = z.object({
  uuid: z.string(),
  password: z.string(),
  tgid: z.string(),
  phone: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  nickName: z.string(),
  sex: z.number(),
  create_time: z.string(),
  update_time: z.string()
})

// 创建用户的响应
const CreateUserRes = commonResponse({
  data: z.object({
    count: z.number(),
    rows: z.array(z.object({
      id: z.number(),
      uuid: z.string(),
      create_time: z.string(),
      update_time: z.string()
    }))
  })
})

// 用户列表的响应
const GetAllUserRes = commonResponse({
  data: z.object({
    count: z.number(),
    rows: z.array(z.object({
      id: z.number(),
      uuid: z.string(),
      password: z.string(),
      tgid: z.string(),
      phone: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      nickName: z.string(),
      sex: z.number(),
      create_time: z.string(),
      update_time: z.string()
    }))
  })
})

// 删除用户的query
export const DeleteUserQuery = z.object({
  uuid: z.string().nonempty()
})

// 删除用户的响应
const DeleteUserRes = z.object({
  uuid: z.string(),
})

export type ICreateUserRes = z.infer<typeof CreateUserRes>;
export type ICreateUserReq = z.infer<typeof CreateUserReq>;
export type IDeleteUserQuery = z.infer<typeof DeleteUserQuery>;

export {
  CreateUserRes,
  CreateUserReq,
  DeleteUserRes,
  GetAllUserRes
}