import { sendMessage } from "../telegram.js";

export async function bindCommand(chatId , userId ,text){
    //todo 根据userid、输入的命令内容 和 微信小程序数据进行绑定
    await sendMessage(chatId,"bindCommand")
}