from dataclasses import dataclass

@dataclass
class Guild:
    name: str
    guildID: int
    playerCount: int
    starCount: int
    moonCount: int
    demonCount: int
    creatorPointCount: int

    def toDict(self):
        return dict(name = self.name, 
                    guildID = self.guildID,
                    playerCount = self.playerCount,
                    starCount = self.starCount,
                    moonCount = self.moonCount,
                    demonCount = self.demonCount,
                    creatorPointCount = self.creatorPointCount
                    )