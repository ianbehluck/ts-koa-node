import { sendMessage } from "../telegram.js";
import User from "@/src/models/user";
import {z} from "koa-swagger-decorator";
import {data} from "cheerio/src/api/attributes";

export async function createCommand(chatId ,uuId , first ,last){
    const us = Object.create(User);
    us.uuid =uuId;
    us.password = '123456';
    us.tgid = uuId;
    us.phone = '';
    us.firstName = first;
    us.lastName = last;
    us.sex = 0;
    //根据userid创建数据库账号
    await User.create(us).then((res)=>{
        console.log("-----res------",res);
        sendMessage(chatId,res)
    }).catch(err=>{
        sendMessage(chatId,e)
    })

}