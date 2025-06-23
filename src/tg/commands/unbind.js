import { sendMessage } from "../telegram.js";

export async function unBindCommand(chatId , userId ,text){
    //todo 根据userid和用户输入的内容和微信小程序数据进行解除绑定
    await sendMessage(chatId,"unBindCommand")
}