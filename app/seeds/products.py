from app.models import db, Product


def seed_products():
    product1 = Product(name='ALPHA BIAS MA-1 JACKET', description="100% Nylon",
    price="410.00", department="Clothing")
    product2 = Product(name='HOODED SWEATSHIRT SMALL LOGO', description="100% Cotton",
    price="155.00", department="Clothing")
    product3 = Product(name='Meow - Silicone chopstick cap', description="Main unit: Silicone rubber (Heat Resistant Temperature: 392F (200C))",
    price="1.50", department="Household")
    product4 = Product(name='Hello Kitty Rubber Finger - Ring Grip', description="Size - (2cm x 1.2cm x 1.1cm) (0.8in x 0.5in x 0.5in)",
    price="1.50", department="Household")
    product5 = Product(name='Agatsuma Zenitsu Okurimono 3D Illusion Anime Lamp', description="USB charging port, easy to charge. Made of durable and beautiful acrylic glass, it can be used with LED lights, saving energy and protecting eyes. Environmentally friendly acrylic material, harmless to health and very good quality.",
    price="26.99", department="Toy")
    product6 = Product(name='Tokyo Ghoul Kaneki Ken Action Figure Awakened', description="Size: about 23 cm high, hand-made in environmental protection, will not cause any harm to the human body, it is a very worthy collection of anime models for anime fans.",
    price="32.98", department="Toy")

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

