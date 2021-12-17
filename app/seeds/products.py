from app.models import db, Product


def seed_products():
    product1 = Product(name='ALPHA BIAS MA-1 JACKET', description="100% Nylon",
    price="410.00", department="Clothing", product_url="https://cdn.discordapp.com/attachments/920474033932349511/921362117679005736/SZ-J017-051-02-A_540x.png")
    product2 = Product(name='HOODED SWEATSHIRT SMALL LOGO', description="100% Cotton",
    price="155.00", department="Clothing", product_url="https://cdn.discordapp.com/attachments/920474033932349511/921362098083217428/SZ-T030-051-A_540x.png")
    product3 = Product(name='Meow - Silicone chopstick cap', description="Main unit: Silicone rubber (Heat Resistant Temperature: 392F (200C))",
    price="1.50", department="Household", product_url="https://cdn.discordapp.com/attachments/920474033932349511/921362076486762506/daiso_chopsticks.jpeg")
    product4 = Product(name='Hello Kitty Rubber Finger - Ring Grip', description="Size - (2cm x 1.2cm x 1.1cm) (0.8in x 0.5in x 0.5in)",
    price="1.50", department="Household", product_url="https://cdn.discordapp.com/attachments/920474033932349511/921362051941662740/daiso_hellokitty.jpeg")
    product5 = Product(name='Agatsuma Zenitsu Okurimono 3D Illusion Anime Lamp', description="USB charging port, easy to charge. Made of durable and beautiful acrylic glass, it can be used with LED lights, saving energy and protecting eyes. Environmentally friendly acrylic material, harmless to health and very good quality.",
    price="26.99", department="Toy", product_url="https://cdn.discordapp.com/attachments/920474033932349511/921362007574339584/demon_slayer_light.jpg")
    product6 = Product(name='Tokyo Ghoul Kaneki Ken Action Figure Awakened', description="Size: about 23 cm high, hand-made in environmental protection, will not cause any harm to the human body, it is a very worthy collection of anime models for anime fans.",
    price="32.98", department="Toy", product_url="https://media.discordapp.net/attachments/920474033932349511/921362869352824842/kaneki_figure.jpg")

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

