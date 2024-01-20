module.exports.config = {
  name: "uid",
  version: "1.0.0",
  hasPermission: 0,
  credits: "𝙀𝙇.𝙄𝘼𝙉𝙎 𝙍𝙀𝙏𝙄𝙍𝙊 𝙎𝙊𝙏𝙀𝙍𝙊",
  description: "Get the user's Facebook UID.",
  usePrefix: true,
  commandCategory: "other",
  cooldowns: 5
};

module.exports.run = function ({ api, event }) {
  if (Object.keys(event.mentions).length === 0) {
    if (event.messageReply) {
      const senderID = event.messageReply.senderID;
      return api.sendMessage(senderID, event.threadID);
    } else {
      return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
    }
  } else {
    for (const mentionID in event.mentions) {
      const mentionName = event.mentions[mentionID];
      api.sendMessage(`${mentionName.replace('@', '')}: ${mentionID}`, event.threadID);
    }
  }
};
