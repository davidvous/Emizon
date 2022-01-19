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
    product15 = Product(name='Exodus by Hikaru Utada', description="2004-10-05 Single Set",
    price="12.98", department="Music", product_url="https://cdn.discordapp.com/attachments/927581171016138842/927586249861103637/utada.jpeg")
    product16 = Product(name='Cat Ramen Bowl Anime T-shirt', description="Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All Other Heathers: 50% Cotton, 50% Polyester",
    price="17.99", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933171194688057404/cat_ramen_shirt.jpeg")
    product17 = Product(name='Surenow Mens 2 in 1 Running Shorts Quick Dry Athletic Shorts', description="[UPGRADED FABRIC IS LIGHT and BREATHABLE] Surenow quick-drying men's shorts are made of upgraded fabric, which is soft and comfortable, and the lining is elastic, so no matter how you move, you won't feel bound. The quick-drying fabric will not feel stuffy when you exercise, which helps to sweat and has the characteristics of fast-drying.",
    price="19.54", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933172703706382437/men_shorts.jpg")
    product18 = Product(name='find. Womens Printed Summer Midi Skirt', description="Designed in Europe - please refer to size chart for specific measurements to achieve the perfect fit",
    price="18.08", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933205045330210876/91ffENtGJPL._AC_UX569_.jpg")
    product19 = Product(name='Columbia Womens Benton Springs Fleece Jacket', description="SOFT FABRIC: This Columbia Women's Benton Springs Full Zip fleece is crafted of soft 100% polyester MTR filament fleece for ultimate warmth.",
    price="121.59", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933205815257616464/71F2tjW19JS._AC_UX679_.jpg")
    product20 = Product(name='Wirefree Padded Medium Support Yoga Bras Tank Tops', description="Designed in Europe - please refer to size chart for specific measurements to achieve the perfect fit",
    price="22.99", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933206239461122148/61MHIvYKOPL._AC_UX67923_.jpg")
    product21 = Product(name='Champion Mens Classic Jersey Long-Sleeve Tee', description="Solid Body: 100% Cotton; granite & oxford: 60pct cotton/40pct polyester",
    price="12.77", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933206716676444230/713klibAl8L._AC_UY741_.jpg")
    product22 = Product(name='Topstype Womens Long Sleeve Tunics Top', description="Suitable for Casual,Party, Work, Date, School, Sports, Vacation, Street wear or casual everyday wear, it's a great gift idea for christmas, for holidays",
    price="22.98", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933207404680736898/61mRsrCrb9L._AC_UY7412_.jpg")
    product23 = Product(name='COOFANDY Mens African Dashiki Cape', description="Design: The hipster hip hop 3/4 sleeve african dashiki cardigan will add your style an unbeatable avant-garde edge and fashion touch.",
    price="30.99", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933207944361832458/71tlnrX1uuL._AC_UX5691.jpg")
    product24 = Product(name='Fashion Mens T Shirt Muscle Gym Workout Top', description="T-Shirt Features: Supper absorbable,fast dry,stretchable,light weight,soft &comfy.",
    price="19.99", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933208333295423568/612eky-H64L._AC_UX6799.jpg")
    product25 = Product(name='Misa Womens Lillian Dress', description="Length: 34.25in / 87cm, from shoulder",
    price="295.00", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933209441535426561/91ZkyBQzxvL._AC_UY7411.jpg")
    product26 = Product(name='Mens Hoodie Japanese Anime Print Unisex Sweatshirt', description="Design: Anime hoodie, unisex sweatshirt, popular cartoon print design, superb pattern making, cute girly pullover",
    price="25.83", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933209862630953020/61L5evruBmL._AC_UX679_.jpg")
    product27 = Product(name='UNIFACO Unisex 3D Digital Print Sports Jogger Pants Casual Graphic Trousers', description="Novelty Eye-Catching Patterns, Stretchy Fabric Make this Pants Suitable For Daily Wear,Running,Gym, and even as Pyjama",
    price="28.99", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933220591719292978/71rCjzD1CQL._AC_UY7412_.jpg")
    product28 = Product(name='Hanes Mens Pullover EcoSmart Hooded Sweatshirt', description="Soft, durable fleece with double-needle cover-seamed neck and armholes stays strong when you work or play hard.",
    price="40.01", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933221106121343026/61HxaOQ9bL._AC_UX6791.jpg")
    product29 = Product(name='Womens High Waisted Short A-line Flare Gothic Mini Skirt Dress', description="Feature: This casual skirt has wide waist band, black pattern, flare design, great for girls to present a lovely gothic style.",
    price="30.99", department="Clothing", product_url="https://cdn.discordapp.com/attachments/927581171016138842/933221503456149555/61SQI6IRmdL._AC_UX679g_.jpg")



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
    db.session.add(product16)
    db.session.add(product17)
    db.session.add(product18)
    db.session.add(product19)
    db.session.add(product20)
    db.session.add(product21)
    db.session.add(product22)
    db.session.add(product23)
    db.session.add(product24)
    db.session.add(product25)
    db.session.add(product26)
    db.session.add(product27)
    db.session.add(product28)
    db.session.add(product29)
    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

