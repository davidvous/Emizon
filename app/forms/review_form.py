from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Review

class ReviewForm(FlaskForm):
    user_id = IntegerField('user_id')
    product_id = IntegerField('product_id')
    headline = StringField('headline', validators=[DataRequired()])
    body = TextAreaField('body', validators=[DataRequired()])
    rating = IntegerField('rating')