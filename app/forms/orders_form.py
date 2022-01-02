from flask_wtf import FlaskForm
from wtforms import Field, StringField, IntegerField
from wtforms.validators import DataRequired

class OrderForm(FlaskForm):
    user_id = IntegerField('user_id')
    items = StringField()
    address = StringField('address')
    city = StringField('city')
    state = StringField('state')
    zipCode = StringField('zipCode')
    credit_card = StringField('credit_card')
    expiration_date = StringField('expiration_date')
    cc_code = StringField('cc_code')
    first_name = StringField('first_name')
    last_name = StringField('last_name')