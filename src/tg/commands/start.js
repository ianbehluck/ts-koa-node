import {sendMessage, setBotCommands} from "../telegram.js";

export async function startCommand(chatId){
    await setBotCommands();
    await sendMessage(chatId,"pong")
}