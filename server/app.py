from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def index():
    return 'homepage'

if __name__ == '__main__':
    app.run(port=5555, debug=True)