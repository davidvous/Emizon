from .db import db
from sqlalchemy.dialects.postgresql import JSON

class Order(db.Model):
    __tablename__ = "orders"

    id= db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    items = db.Column(JSON)
    address = db.Column(db.String(255))
    city = db.Column(db.String(75))
    state = db.Column(db.String(2))
    zipCode = db.Column(db.String(5))
    credit_card = db.Column(db.String(16))
    expiration_date = db.Column(db.String(4))
    cc_code = db.Column(db.String(3))
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    users = db.relationship('User', back_populates="orders")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'items': self.items,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'zipCode': self.zipCode,
            'credit_card': self.credit_card,
            'expiration_date': self.expiration_date,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
    
    def to_dictionary(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'items': self.items,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'zipCode': self.zipCode,
            'credit_card': self.credit_card,
            'expiration_date': self.expiration_date,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'user_meta': {'fName': self.users.first_name, 'lName': self.users.last_name},
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }



