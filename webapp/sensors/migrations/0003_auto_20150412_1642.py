# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0002_auto_20150412_1638'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='sensor',
            options={'verbose_name': 'Sensor', 'verbose_name_plural': 'Sensors'},
        ),
        migrations.AlterField(
            model_name='sensor',
            name='last_conn',
            field=models.DateTimeField(auto_created=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='sensor',
            name='last_load',
            field=models.DateTimeField(auto_created=True),
            preserve_default=True,
        ),
    ]
