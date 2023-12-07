from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    price = db.Column(db.Integer)
    category = db.Column(db.String)
    image = db.Column(db.String)
    cart_id = db.Column(db.Integer, db.ForeignKey('carts.id'))

    def __repr__(self):
        return f"<Product {self.name}>"


class Cart(db.Model):
    __tablename__ = 'carts'

    id = db.Column(db.Integer, primary_key = True)
    Products = db.Relationship('Product', backref='cart')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __repr__(self):
        return f"<Cart>"


class User (db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
    cart = db.Relationship('Cart', uselist=False, backref='user')

    def __repr__(self):
        return f"<User {self.username}>"
