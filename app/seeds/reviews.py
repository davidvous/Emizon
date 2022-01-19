from app.models import db, Review

def seed_reviews():
    review1 = Review(user_id=1, product_id=1, headline="I got the last one!", body="This jacket is lit. And I got the last one, haha suckers!",
    rating=5)
    review2 = Review(user_id=2, product_id=1, headline="Whoever got the last one, watch out!", body="I have a very particular set of skills; skills I have acquired over a very long career. Skills that make me a nightmare for people like you.",
    rating=1)
    review3 = Review(user_id=1, product_id=2, headline="I got the last one of these too!", body="Can't catch me I'm the gingerbread man!",
    rating=5)
    review4 = Review(user_id=3, product_id=2, headline="These are great. This is my 12th pair!", body="Feels great and looks stylish!",
    rating=5)
    review5 = Review(user_id=4, product_id=3, headline="Would definitely get this again!", body="This was a great buy!",
    rating=4)
    review6 = Review(user_id=1, product_id=4, headline="This is great to protect your hands!", body="When you type all day and need some protection for your fingers, this is the thing to get! I love the color too!",
    rating=4)
    review7 = Review(user_id=1, product_id=5, headline="This light is awesome! I can't believe how cool it is!", body="Zenitsu is the best character in Demon Slayer and I love this light. It makes me feel like I can do Thunder Breathing too.",
    rating=5, reviewImg='https://images-na.ssl-images-amazon.com/images/I/A1YwT4-1f7L._SL1600_.jpg')
    review8 = Review(user_id=1, product_id=6, headline="Kaneki! Or can I believe it?", body="Such a cool figurine! I have it next to my Zenitsu light and no monsters will dare come out to attack me.",
    rating=5, reviewImg='https://images-na.ssl-images-amazon.com/images/I/C1r2R0A1v9S._SL1600_.jpg')

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
