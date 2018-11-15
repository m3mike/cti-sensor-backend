# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('communities', '0008_auto_20150412_1635'),
    ]

    operations = [
        migrations.AlterField(
            model_name='community',
            name='conn_host',
            field=models.GenericIPAddressField(verbose_name=b'Community Host'),
            preserve_default=True,
        ),
    ]
