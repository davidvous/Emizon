from app.models import db, Order


def seed_orders():
    order1 = Order(user_id=1, items=2, address="123 Demo Street, Somewhere, The World 99999", credit_card="4444333322221111",
    expiration_date="1226", first_name="Demo", last_name="User")
    order2 = Order(user_id=2, items=1, address="7000 Las Vegas Blvd, Las Vegas, NV 89115", credit_card="4444333322221111",
    expiration_date="1226", first_name="David", last_name="Le")
    order3 = Order(user_id=3, items=3, address="287 S Tampa Ave Orlando, FL 32805", credit_card="4444333322221111",
    expiration_date="1226", first_name="Malaa", last_name="Revolt")

    db.session.add(order1)
    db.session.add(order2)
    db.session.add(order3)
    db.session.commit()

def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()
