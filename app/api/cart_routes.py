from flask import Blueprint, jsonify, request
from app.models import Cart_item, db, Product

cart_routes = Blueprint('cart', __name__)


@cart_routes.route('/')
def all_cart():
    all_cart = Cart_item.query.all()
    return {'Cart': [each.to_dict() for each in all_cart]}


@cart_routes.route('/<int:id>')
def cart(id):
    cart = Cart_item.query.filter(Cart_item.user_id == id).all()
    return {'Cart_item': [each.to_dict() for each in cart]}

@cart_routes.route('/<int:id>', methods=['POST'])
def add_cart_item(id):
    data = request.get_json()
    checkCart = Cart_item.query.filter(Cart_item.product_id == id).first()
    if not checkCart:
        newItem = Cart_item(product_id=id, user_id=data['userId'], quantity=1)
        db.session.add(newItem)
        db.session.commit()
        return {'message': f"Product {id} was added"}
    else:
        currentQuantity = checkCart.quantity
        checkCart.quantity = currentQuantity + 1 
        db.session.commit()
        return {'Cart_item': checkCart.to_dict()}

@cart_routes.route('/<int:id>', methods=['DELETE'])
def delete_cart_item(id):
    cart_item = Cart_item.query.filter(Cart_item.product_id == id).one()
    currentQuantity = cart_item.quantity
    if currentQuantity == 1:
        db.session.delete(cart_item)
        db.session.commit()
        return {'Message': f"Cart_item {id} was removed"}
    else:
        cart_item.quantity = currentQuantity - 1
        db.session.commit()
        return {'Cart_item': cart_item.to_dict()}

