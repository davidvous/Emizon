from flask import Blueprint, jsonify, request
from app.models import Cart_item, db, Product

cart_routes = Blueprint('cart', __name__)


@cart_routes.route('/<int:id>/cart/')
def all_cart(id):
    cart = Cart_item.query.filter(Cart_item.user_id == id).all()
    return {'Cart_item': [each.to_dict() for each in cart]}


@cart_routes.route('/<int:userId>/cart/<int:id>/', methods=['POST'])
def add_cart_item(userId, id):
    checkCart = Cart_item.query.filter(Cart_item.product_id == id, Cart_item.user_id == userId).first()
    if not checkCart:
        newItem = Cart_item(product_id=id, user_id=userId, quantity=1)
        db.session.add(newItem)
        db.session.commit()
        return {'Cart_item': newItem.to_dict()}
    else:
        currentQuantity = checkCart.quantity
        checkCart.quantity = currentQuantity + 1 
        db.session.commit()
        return {'Cart_item': checkCart.to_dict()}

@cart_routes.route('/<int:userId>/cart/<int:id>/', methods=['DELETE'])
def delete_cart_item(userId, id):
    cart_item = Cart_item.query.filter(Cart_item.product_id == id, Cart_item.user_id == userId).first()
    currentQuantity = cart_item.quantity
    if currentQuantity == 1:
        db.session.delete(cart_item)
        db.session.commit()
        return {'Message': f"Product {id} was deleted!"}
    else:
        cart_item.quantity = currentQuantity - 1
        db.session.commit()
        return {'Cart_item': cart_item.to_dict()}

@cart_routes.route('/<int:userId>/cart/<int:id>/all/', methods=['DELETE'])
def delete_cart_line(userId, id):
    cart_item = Cart_item.query.filter(Cart_item.product_id == id, Cart_item.user_id == userId).first()
    db.session.delete(cart_item)
    db.session.commit()
    return {'Message': f"Product {id} was deleted!"}

@cart_routes.route('/<int:userId>/cart/<int:id>/', methods=['PUT'])
def update_cart_item(userId, id):
    data = request.get_json()
    cart_item = Cart_item.query.filter(Cart_item.product_id == id, Cart_item.user_id == userId).first()
    cart_item.quantity = data['quantity']
    db.session.commit() 
    return cart_item.to_dict()

