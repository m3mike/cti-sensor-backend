# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('communities', '0005_auto_20150412_1631'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='community',
            name='conn_ssl_cert_pass',
        ),
    ]
