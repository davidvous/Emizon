from app.models import db, User

def seed_users():
    demo = User(first_name='Demo', last_name='User', email='demo@demouser.com',
    password='password')
    david = User(first_name='David', last_name='Le', email='ledavidvu@gmail.com',
    password='davidpassword')
    malaa = User(first_name='Malaa', last_name='Revolt', email='malaa@revolt.com',
    password='malaapassword')
    illenium = User(first_name='Illenium', last_name='Neededyou', email='illenium@neededyou.com',
    password='password')

    db.session.add(demo)
    db.session.add(david)
    db.session.add(malaa)
    db.session.add(illenium)
    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
