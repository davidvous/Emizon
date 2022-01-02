from .db import db

class Review(db.Model):
    __tablename__ = "reviews"

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), primary_key=True)
    headline = db.Column(db.String(100), nullable=False)
    body = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False, default=3)
    reviewImg = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    product = db.relationship('Product', back_populates="users_reviews")
    user = db.relationship('User', back_populates="products_reviews")
    
    def to_dict(self):
        return {
            'user_id': self.user_id,
            'user_first_name': self.user.first_name,
            'user_last_name': self.user.last_name,
            'product_id': self.product_id,
            'headline': self.headline,
            'body': self.body,
            'rating': self.rating,
            'reviewImg': self.reviewImg,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }