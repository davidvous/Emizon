from flask import Blueprint, jsonify, request
from app.models import Order, db
from app.forms.orders_form import OrderForm
from sqlalchemy import or_

order_routes = Blueprint('orders', __name__)


@order_routes.route('/')
def orders():
    orders = Order.query.all()
    return {'orders': [order.to_dict() for order in orders]}


@order_routes.route('/<int:id>/')
def order(id):
    orders = Order.query.filter(Order.user_id == id).all()
    return {'user_orders': [order.to_dict() for order in orders]}

@order_routes.route('/<int:id>/new/address/', methods=['POST','PATCH'])
def newOrderAddress(id):    
    existingOrder = Order.query.filter(Order.user_id == id).order_by(Order.id.desc()).first()
    if request.method == 'POST':
        form = OrderForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            order = Order(
                user_id=id,
                address=form.data['address'],
                city=form.data['city'],
                state=form.data['state'],
                zipCode=form.data['zipCode'],
                first_name=form.data['first_name'],
                last_name=form.data['last_name'],
            )
            db.session.add(order)
            db.session.commit()
            return {'Added_Address': order.to_dict()}
    elif request.method == 'PATCH':
        form = OrderForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            existingOrder.user_id = id
            existingOrder.address = form.data['address']
            existingOrder.city = form.data['city']
            existingOrder.state = form.data['state']
            existingOrder.zipCode = form.data['zipCode']
            existingOrder.first_name = form.data['first_name']
            existingOrder.last_name = form.data['last_name']
            db.session.commit()
            return {'Edited_Address': existingOrder.to_dict()}
    return "Order failed to add or edit address!"

@order_routes.route('/<int:id>/new/payment/', methods=['POST','PATCH'])
def newOrderPayment(id):    
    existingOrder = Order.query.filter(Order.user_id == id).order_by(Order.id.desc()).first()
    if request.method == 'POST':
        form = OrderForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            order = Order(
                user_id=id,
                credit_card=form.data['credit_card'],
                expiration_date=form.data['expiration_date'],
                cc_code=form.data['cc_code'],
            )
            db.session.add(order)
            db.session.commit()
            return {'Added_Payment': order.to_dict()}
    elif request.method == 'PATCH':
        form = OrderForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            existingOrder.user_id = id
            existingOrder.credit_card = form.data['credit_card']
            existingOrder.expiration_date = form.data['expiration_date']
            existingOrder.cc_code = form.data['cc_code']
            db.session.commit()
            return {'Edited_Payment': existingOrder.to_dict()}
    return "Order failed to add or edit payment!"

@order_routes.route('/<int:id>/new/', methods=['PATCH'])
def newOrder(id):
        existingOrder = Order.query.filter(Order.user_id == id).filter(Order.items == None).first()
        if existingOrder:
            nullShipNullPay = Order.query.filter(Order.user_id == id).filter(or_(Order.address == None, Order.credit_card == None)).all()
            if not nullShipNullPay:
                form = OrderForm()
                form['csrf_token'].data = request.cookies['csrf_token']
                if form.validate_on_submit():
                    existingOrder.items = form.data['items']
                    db.session.commit()
                    return {'Added_Order': existingOrder.to_dict()}
            else:
                return {'error': 'User needs to fill out shipping or payment first!'}, 401
        else:
            nullCheck = Order.query.filter(Order.user_id == id).filter(or_(Order.address != None, Order.credit_card != None, Order.items != None)).order_by(Order.id.desc()).first()
            if nullCheck:
                form = OrderForm()
                form['csrf_token'].data = request.cookies['csrf_token']
                if form.validate_on_submit():
                    print(">>>>>>>>>", form.data, nullCheck.address)
                    order = Order(
                            user_id=id,
                            address=nullCheck.address,
                            city=nullCheck.city,
                            state=nullCheck.state,
                            zipCode=nullCheck.zipCode,
                            first_name=nullCheck.first_name,
                            last_name=nullCheck.last_name,
                            items=form.data['items'],
                            credit_card=nullCheck.credit_card,
                            expiration_date=nullCheck.expiration_date,
                            cc_code=nullCheck.cc_code
                            )
                    db.session.add(order)
                    db.session.commit()
                    return {'Added_Order': order.to_dict()}
            return {'error': 'User does not have a current working order!'}, 401