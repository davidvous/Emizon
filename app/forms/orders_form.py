from flask_wtf import FlaskForm
from wtforms import Field, StringField, IntegerField
from wtforms.validators import DataRequired

class OrderForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    items = StringField()
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    zipCode = StringField('zipCode', validators=[DataRequired()])
    credit_card = StringField('credit_card', validators=[DataRequired()])
    expiration_date = StringField('expiration_date', validators=[DataRequired()])
    cc_code = StringField('cc_code', validators=[DataRequired()])
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])