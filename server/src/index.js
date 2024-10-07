const express = require('express')
const bodyParser = require('body-parser')

const { Database } = require('./database')
const { Guild } = require('./types/guild')

const app = express()
app.use(express.json())
const port = 3000

const database = new Database()

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/guilds/getGuild/:guildID', (req, res) => {
    database.returnGuildFromID(req.params.guildID).then((guild) => {
        res.send(JSON.stringify(guild.toObject(), null, 2))
    }).catch((err) => {
        const obj = {
            "error": err
        }

        res.send(JSON.stringify(obj))
    })
})

app.get('/guilds/getGuildsLeaderboard', (req, res) => {
    database.getGuildsLeaderboard().then((leaderboard) => {
        res.send(JSON.stringify(leaderboard))
    })
})

app.post('/guilds/createGuild', (req, res) => {
    const guild = new Guild(
        req.body.name,
        req.body.guildID,
        req.body.playerCount,
        req.body.starCount,
        req.body.moonCount,
        req.body.demonCount,
        req.body.creatorPointCount
    )

    database.createGuild(guild).then(() => {
        const msg = {
            "message": "guild successfully created"
        }

        res.send(JSON.stringify(msg))
    }).catch((err) => {
        const msg = {
            "error": err
        }

        res.send(JSON.stringify(msg))
    })
})

app.listen(port, () => {
    console.log("server running at localhost:", port)
})