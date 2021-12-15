from .db import db

class Review(db.Model):
    __tablename__ = "reviews"

    id= db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    headline = db.Column(db.String(100), nullable=False)
    body = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False, default=3)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'headline': self.headline,
            'body': self.body,
            'rating': self.rating,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }