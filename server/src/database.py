import sqlite3

from local_types.guild import Guild

class Database:
    def __init__(self):
        self.con = sqlite3.connect("./database/guilds.db", check_same_thread=False)
        self.cur = self.con.cursor()
    
    def returnGuildFromID(self, guildID):
        res = self.cur.execute("SELECT * FROM guilds WHERE guildID=?", (guildID,))
        row = res.fetchone()
        
        (name, id, playerCount, starCount, moonCount, demonCount, creatorPointCount) = row
        return Guild(name, id, playerCount, starCount, moonCount, demonCount, creatorPointCount)