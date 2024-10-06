const sqlite3 = require('sqlite3').verbose()
const path = require("path")

const guild = require('./types/guild.js')

class Database {
    constructor() {
        this.guildDB = new sqlite3.Database(path.join(__dirname, "../database/guilds.db"), sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                throw err;
            } else {
                console.log("connected to the guilds database")
            }
        })
    }

    returnGuildFromID(guildID) {
        return new Promise((resolve, reject) => {
            this.guildDB.serialize(() => {
                this.guildDB.get("SELECT * FROM guilds WHERE guildID=?", [guildID], (err, row) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(new guild.Guild(row.name, row.guildID, row.playerCount, row.starCount, row.moonCount, row.demonCount, row.creatorPointCount))
                    }
                })
            })
        })
    }

    createGuild(guild) {
        return new Promise((resolve, reject) => {
            this.guildDB.serialize(() => {
                this.guildDB.run("INSERT INTO guilds VALUES(?, ?, ?, ?, ?, ?, ?)", [guild.name, 
                    guild.guildID, guild.playerCount, guild.starCount, guild.moonCount, guild.demonCount, guild.creatorPointCount], (err) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve()
                        }
                    })
            })
        })
    }
}

exports.Database = Database