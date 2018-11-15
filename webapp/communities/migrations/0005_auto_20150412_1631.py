# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('communities', '0004_remove_community_conn_ssl_cert'),
    ]

    operations = [
        migrations.AlterField(
            model_name='community',
            name='conn_ssl_cert_pass',
            field=models.CharField(default=b'', max_length=1024),
            preserve_default=True,
        ),
    ]
