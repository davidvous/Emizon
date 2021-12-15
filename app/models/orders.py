from .db import db

class Order(db.Model):
    __tablename__ = "orders"

    id= db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    items = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    credit_card = db.Column(db.Numeric(16,0), nullable=False)
    expiration_date = db.Column(db.Numeric(4,0), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'items': self.items,
            'address': self.address,
            'credit_card': self.credit_card,
            'expiration_date': self.expiration_date,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }