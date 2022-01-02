from flask import Blueprint, jsonify
from app.models import Order

order_routes = Blueprint('orders', __name__)


@order_routes.route('/')
def orders():
    orders = Order.query.all()
    return {'orders': [order.to_dict() for order in orders]}


@order_routes.route('/<int:id>/')
def order(id):
    order = Order.query.filter(Order.user_id == id).first()
    if not order:
        return 'This user does not have an order'
    print("THIS IS THE ORDER MAN>>>>>", order)
    return order.to_dict()
