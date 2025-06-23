// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {balanceCommand} from "../commands/balance.js";
import {bindCommand} from "../commands/bind.js";
import {createCommand} from "../commands/create.js";
import {cricketCommand} from "../commands/cricket.js";
import {helpCommand} from "../commands/help.js";
import {startCommand} from "../commands/start.js";
import {unBindCommand} from "../commands/unbind.js";

export const config = {
    maxDuration: 60,
};

export default async function handler(req, res) {
    if (req.method == "POST") {
        const chatId = req.body.message.chat.id;
        const text = req.body.message.text;
        const uuId = req.body.message.from.id;

        console.log("----userId---->", uuId);
        if (text.startsWith("/start")) {
            await helpCommand(chatId)
        }
        else if (text.startsWith("/create")) {
            await createCommand(chatId, uuId ,req.body.chat.first_name , req.body.chat.last_name);
        }
        else if (text.startsWith("/bind")) {
            await bindCommand(chatId, uuId, text);
        }
        else if (text.startsWith("/unbind")) {
            await unBindCommand(chatId, uuId, text);
        }
        else if (text.startsWith("/money")) {
            await balanceCommand(chatId, uuId);
        }
        else if (text.startsWith("/help")) {
            await helpCommand(chatId);
        }
        res.status(200).send("OK")
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(500).send('Method Not Allowed');
    }
}