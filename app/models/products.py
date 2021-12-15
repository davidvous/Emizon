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

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'product_url': self.product_url,
            'department': self.department,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }