const Discord = require("discord.js");

module.exports = {
    name: "profile",
    aliases: ["me"],
    category: "info",
    description: "Returns user profile information",
    usage: "[command | alias]",
    run: async (bot) => {
        let { client, message, args, prefix } = bot;
        if (args[0]) return getCMD(client, message, args[0]);
        else return getAll(client, message, prefix);
    },
};

// Function to display all profile information
async function getAll(client, message, prefix) {
    try {
        // Ensure the message is from a guild
        if (!message.guild) {
            return message.reply("This command can only be used in a server!");
        }

        // Get the user and member objects
        const user = message.author;
        const member = message.member;
        console.log(user, member);
        // Create an embed for the profile
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(`${user.tag}'s Profile`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: "Username", value: user.tag, inline: true },
                { name: "User ID", value: user.id, inline: true }
            )
            .setFooter(`Use ${prefix}profile [command] for more options`, client.user.displayAvatarURL())
            .setTimestamp();

        // Send the embed
        await message.channel.send({ embeds: [embed] });
    } catch (error) {
        console.error("Error in getAll:", error);
        await message.reply("An error occurred while fetching your profile.");
    }
}

// Placeholder for getCMD (to avoid undefined errors)
async function getCMD(client, message, input) {
    await message.reply("This feature is not implemented yet.");
}