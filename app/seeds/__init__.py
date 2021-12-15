from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .orders import seed_orders, undo_orders
from .cart_items import seed_cart_items, undo_cart_items
from .reviews import seed_reviews, undo_reviews

seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
    seed_users()
    seed_products()
    seed_orders()
    seed_cart_items()
    seed_reviews()

@seed_commands.command('undo')
def undo():
    undo_users()
    undo_products()
    undo_orders()
    undo_cart_items()
    undo_reviews()
