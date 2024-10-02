import json

from flask import Flask

from database import Database

class Webserver:
    def __init__(self):
        self.app = Flask(__name__)
        self.database = Database()

        @self.app.route("/")
        def mainRoute():
            return "<h1>hello world!</h1>"

        @self.app.route("/guilds/getGuild/<guildID>")
        def getGuildRoute(guildID):
            data = self.database.returnGuildFromID(guildID)
            dataJSON = json.dumps(data.toDict())
            return dataJSON

        self.app.run()