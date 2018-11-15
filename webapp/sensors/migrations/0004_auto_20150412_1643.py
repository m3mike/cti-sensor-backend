# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0003_auto_20150412_1642'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sensor',
            name='last_conn',
            field=models.DateTimeField(auto_now=True, auto_created=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='sensor',
            name='last_load',
            field=models.DateTimeField(auto_now=True, auto_created=True),
            preserve_default=True,
        ),
    ]
