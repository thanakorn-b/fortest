# Generated by Django 3.1.4 on 2021-01-31 09:01

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('history', '0005_auto_20210131_0732'),
    ]

    operations = [
        migrations.AlterField(
            model_name='history',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2021, 1, 31, 9, 1, 21, 335268, tzinfo=utc)),
        ),
    ]
