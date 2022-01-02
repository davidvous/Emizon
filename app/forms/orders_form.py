from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired

class OrderForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    items = JSON
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    zipCode = StringField('zipCode', validators=[DataRequired()])
    credit_card = StringField('credit_card', validators=[DataRequired()])
    expiration_date = StringField('expiration_date', validators=[DataRequired()])