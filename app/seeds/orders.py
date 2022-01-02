from app.models import db, Order


def seed_orders():
    order1 = Order(user_id=1, items={1:5, 2:5, 3:5}, address="123 Demo Street", city='Somewhere', state='The World', zipCode='99999', credit_card="4444333322221111",
    expiration_date="1226", first_name="Demo", last_name="User", cc_code="123")
    order2 = Order(user_id=2, items={1:5, 2:5, 3:5}, address="7000 Las Vegas Blvd", city='Las Vegas', state='NV', zipCode='89115', credit_card="4444333322221111",
    expiration_date="1226", first_name="David", last_name="Le", cc_code="123")
    order3 = Order(user_id=3, items={1:5, 2:5, 3:5}, address="287 S Tampa Ave", city='Orlando', state='FL', zipCode='32805', credit_card="4444333322221111",
    expiration_date="1226", first_name="Malaa", last_name="Revolt", cc_code="123")
    order4 = Order(user_id=1, items={2:2, 3:2, 5:10}, address="123 Demo Street", city='Somewhere', state='The World', zipCode='99999', credit_card="4444333322221111",
    expiration_date="1226", first_name="Demo", last_name="User", cc_code="123")

    db.session.add(order1)
    db.session.add(order2)
    db.session.add(order3)
    db.session.add(order4)
    db.session.commit()

def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()
