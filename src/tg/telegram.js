const BOT_TOKEN = "7998836073:AAE6UCmlFtq-M8HR8V1gvnzig3U1Cuf0iiM";
// msg, chatd
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`

export async function sendMessage(chatid, text) {
    const url = `${TELEGRAM_API_URL}/sendMessage`;
    try {
        const respose = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatid,
                text: text
            })
        })
        if (!respose.ok) {
            console.log("Failed to send message to telegram user", await respose.text());
        }
    } catch (err) {
        console.log("Error occured while sending message to telegram user", err);
    }

}

const data = {
    commands: [
        {command: 'getme', description: '获取你的用户ID'},
        {command: 'create', description: '创建平台账号'},
        {command: 'bind', description: '绑定微信小程序账号'},
        {command: 'unbind', description: '解绑微信小程序账号'},
        {command: 'getbalance', description: '查看平台余额'},
        {command: 'getgroupid', description: '获取群组ID（群组内使用）'},
        {command: 'help', description: '获取帮助信息'}
    ]
}

export async function setBotCommands() {
    console.log("--------Telegram setBotCommands----->");
    const url = `${TELEGRAM_API_URL}/setMyCommands`;
    try {
        const respose = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
    })
        if (!respose.ok) {
            console.log("Failed to send message to telegram user", await respose.text());
        }
        console.log("-----respose-----> ", respose)
        console.log("-----respose.ok-----> ", await respose.text());
    } catch (err) {
        console.log("Error occured while sending message to telegram user", err);
    }
    console.log("--------Telegram setBotCommands----->");
}