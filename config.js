require('dotenv').config();

module.exports = {
    bot_admin: [process.env.ADMIN_ID], // Bot admins
    token: process.env.DISCORD_TOKEN,  // Token from .env
    prefix: "." // Command prefix
}
