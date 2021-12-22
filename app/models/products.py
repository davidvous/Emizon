from .db import db

class Product(db.Model):
    __tablename__ = "products"

    id= db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Numeric(10,2), nullable=False)
    product_url = db.Column(db.String(255), nullable=False, default='https://cdn.discordapp.com/attachments/920474033932349511/920474083332862002/default-product-image.png')
    department = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    users = db.relationship("Cart_item", back_populates="product")
    users_reviews = db.relationship('Review', back_populates="product")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': str(self.price),
            'product_url': self.product_url,
            'department': self.department,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'average_rating': int(sum([obj.rating for obj in self.users_reviews])/len([obj.rating for obj in self.users_reviews]))
        }

    def solo_product(self):
        print([each for each in self.users_reviews])
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': str(self.price),
            'product_url': self.product_url,
            'department': self.department,
            'average_rating': int(sum([obj.rating for obj in self.users_reviews])/len([obj.rating for obj in self.users_reviews])),
            'review': [{
                'headline' : each.headline,
                'user_id' : each.user_id,
                'body': each.body,
                'indivRating': each.rating,
                'createdAt': each.created_at,
                'updated_at': each.updated_at
                } for each in self.users_reviews]
        }