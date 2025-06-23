import { sendMessage } from "../telegram.js";

export async function balanceCommand(chatId ,userId){
    //todo 根据userid查看账户余额
    await sendMessage(chatId,"balanceCommand")
}