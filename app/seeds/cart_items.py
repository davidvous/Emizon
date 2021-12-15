from app.models import db, Cart_item

def seed_cart_items():
    cart_item1 = Cart_item(product_id=1, user_id=1, quantity=1)
    cart_item2 = Cart_item(product_id=2, user_id=1, quantity=1)
    cart_item3 = Cart_item(product_id=3, user_id=1, quantity=1)
    cart_item4 = Cart_item(product_id=4, user_id=1, quantity=1)
    cart_item5 = Cart_item(product_id=5, user_id=1, quantity=1)
    cart_item6 = Cart_item(product_id=6, user_id=1, quantity=1)

    db.session.add(cart_item1)
    db.session.add(cart_item2)
    db.session.add(cart_item3)
    db.session.add(cart_item4)
    db.session.add(cart_item5)
    db.session.add(cart_item6)
    db.session.commit()

def undo_cart_items():
    db.session.execute('TRUNCATE cart_items RESTART IDENTITY CASCADE;')
    db.session.commit()
