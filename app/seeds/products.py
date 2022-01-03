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
    price="26.99", department="Toys", product_url="https://cdn.discordapp.com/attachments/920474033932349511/921362007574339584/demon_slayer_light.jpg")
    product6 = Product(name='Tokyo Ghoul Kaneki Ken Action Figure Awakened', description="Size: about 23 cm high, hand-made in environmental protection, will not cause any harm to the human body, it is a very worthy collection of anime models for anime fans.",
    price="32.98", department="Toys", product_url="https://media.discordapp.net/attachments/920474033932349511/921362869352824842/kaneki_figure.jpg")
    product7 = Product(name='Catan Board Game (Base Game)', description="STRATEGY GAME: Trade, build and settle the Island of CATAN in this addictively fun strategy game previously called Settlers of CATAN.",
    price="37.40", department="Games", product_url="https://cdn.discordapp.com/attachments/927581171016138842/927581210602004520/catan.jpg")
    product8 = Product(name='My Hero Academia: Collection Box Seasons 1-3 [DVD]', description="From studio BONES, the creators of Fullmetal Alchemist and Soul Eater, comes My Hero Academia, a superhero origin story that soars to the top of the class. Izuku has dreamt of being a hero all his life a lofty goal for anyone, but especially challenging for a kid with no superpowers.",
    price="63.37", department="Movies", product_url="https://cdn.discordapp.com/attachments/927581171016138842/927581775218217001/mha.jpg")
    product9 = Product(name='Milano Shag Ivory Bean Bag Chair, Ivory', description="DETAILS MAKE THE DIFFERENCE: Our Milano features a sturdy handle to make it a breeze to move and is double stitched with dual zippers for extra safety and durability.",
    price="97.21", department="Furniture", product_url="https://cdn.discordapp.com/attachments/927581171016138842/927582293139292210/chair.jpg")
    product10 = Product(name='Marukome Miso Gluten Free', description="Restaurant quality miso. All natural and gluten free-Great for vegetarians.",
    price="97.21", department="Food", product_url="https://cdn.discordapp.com/attachments/927581171016138842/927582746040233984/miso.jpg")
    product11 = Product(name='Jujutsu Kaisen 0', description="The prequel to the supernatural exorcist adventure Jujutsu Kaisen!",
    price="8.99", department="Books", product_url="https://cdn.discordapp.com/attachments/927581171016138842/927583367707369542/jjk.jpg")
    product12 = Product(name='Luwint LED Colorful Flashing Finger Lighting Gloves', description="6 Mode 3 Colors LED Gloves Rave Light Finger Lighting Flashing Glow Mittens. Easy to use. Different color settings and patterns the light run through at night by pressing the button on the wrist",
    price="12.99", department="Electronics", product_url="https://cdn.discordapp.com/attachments/927581171016138842/927584031548268604/glowhands.png")
    product13 = Product(name='Natures Sunshine LBS II, 100 Capsules', description="Natural Constipation Relief - Cascara sagrada bark, buckthorn bark, licorice root, and capsicum are natural laxatives for constipation commonly found in detox teas",
    price="17.16", department="Health", product_url="https://cdn.discordapp.com/attachments/927581171016138842/927585087044878357/constipation.jpg")
    product14 = Product(name='Leowefowa Koi Fish And Sakura Flower Canvas', description="High definition picture photo prints on canvas with vivid color using fade-resistant inks on thick high quality canvas. The finishing artwork is durable, moisture resistant and color fade-resistant.",
    price="13.98", department="Art", product_url="https://cdn.discordapp.com/attachments/927581171016138842/927585510174625872/koifish.jpg")
    product14 = Product(name='Exodus by Hikaru Utada', description="2004-10-05 Single Set",
    price="12.98", department="Music", product_url="https://cdn.discordapp.com/attachments/927581171016138842/927586249861103637/utada.jpeg")

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    db.session.add(product11)
    db.session.add(product12)
    db.session.add(product13)
    db.session.add(product14)
    db.session.add(product15)
    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

