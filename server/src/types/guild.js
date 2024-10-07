class Guild {
    constructor(name, guildID, playerCount, starCount, moonCount, demonCount, creatorPointsCount) {
        this.name = name
        this.guildID = guildID
        this.playerCount = playerCount
        this.starCount = starCount
        this.moonCount = moonCount
        this.demonCount = demonCount
        this.creatorPointsCount = creatorPointsCount
    }

    toArray() {
        return new Array(this.name, this.guildID, this.playerCount, this.starCount, this.moonCount, this.demonCount, this.creatorPointsCount)
    }

    toObject() {
        const obj = {
            name: this.name,
            guildID: this.guildID,
            playerCount: this.playerCount,
            starCount: this.starCount,
            moonCount: this.moonCount,
            demonCount: this.demonCount,
            creatorPointsCount: this.creatorPointsCount
        }

        return obj
    }
}

class LeaderboardGuild extends Guild {
    constructor(name, guildID, playerCount, starCount, moonCount, demonCount, creatorPointsCount, guildRating) {
        super(name, guildID, playerCount, starCount, moonCount, demonCount, creatorPointsCount)
        this.guildRating = guildRating
    }

    toArray() {
        return new Array(this.name, this.guildID, this.playerCount, this.starCount, this.moonCount, this.demonCount, this.creatorPointsCount, this.guildRating)
    }

    toObject() {
        const obj = {
            name: this.name,
            guildID: this.guildID,
            playerCount: this.playerCount,
            starCount: this.starCount,
            moonCount: this.moonCount,
            demonCount: this.demonCount,
            creatorPointsCount: this.creatorPointsCount,
            guildRating: this.guildRating
        }

        return obj
    }
}

exports.Guild = Guild
exports.LeaderboardGuild = LeaderboardGuild