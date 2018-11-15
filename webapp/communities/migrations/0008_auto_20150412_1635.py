# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('communities', '0007_auto_20150412_1633'),
    ]

    operations = [
        migrations.AlterField(
            model_name='community',
            name='conn_ssl_cert_enabled',
            field=models.BooleanField(default=False, verbose_name=b'SSL Certificate Enabled?'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='community',
            name='sightings_configuration',
            field=models.CharField(default=b'Auto', max_length=255, verbose_name=b'Sightings Mode', choices=[(b'auto', b'Automatic'), (b'manual', b'Manual')]),
            preserve_default=True,
        ),
    ]
