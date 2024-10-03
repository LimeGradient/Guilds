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
}

exports.Guild = Guild