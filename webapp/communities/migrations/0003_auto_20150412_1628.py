# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('communities', '0002_auto_20150412_1627'),
    ]

    operations = [
        migrations.AlterField(
            model_name='community',
            name='conn_ssl_cert',
            field=models.FileField(default=None, upload_to=b'', verbose_name=b'SSL Certificate'),
            preserve_default=True,
        ),
    ]
