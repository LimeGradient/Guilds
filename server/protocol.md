# JSON Objects

### Guild
* name - string
* guildID - int
* playerCount - int
* starCount - int
* moonCount - int
* demonCount - int
* creatorPointsCount - int

### Leaderboard Guild
* name - string
* guildID - int
* playerCount - int
* starCount - int
* moonCount - int
* demonCount - int
* creatorPointsCount - int
* guildRating - int

# Routes

### /guilds/getGuild/:guildID:
type - GET

params:
* guildID - int

returns:
* Guild Object

### /guilds/getGuildsLeaderboard
type - GET

params:
* none

returns:
* Leaderboard Guild Array

### /guilds/createGuild
type - POST

params:
* name - string
* guildID - int
* playerCount - int
* starCount - int
* moonCount - int
* demonCount - int
* creatorPointsCount - int

returns:
* msg - string