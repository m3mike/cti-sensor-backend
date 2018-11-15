# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('communities', '0006_remove_community_conn_ssl_cert_pass'),
    ]

    operations = [
        migrations.AlterField(
            model_name='community',
            name='conn_host',
            field=models.IPAddressField(verbose_name=b'Community Host'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='community',
            name='conn_pass',
            field=models.CharField(max_length=1024, verbose_name=b'Community Password'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='community',
            name='conn_user',
            field=models.CharField(max_length=1024, verbose_name=b'Community Username'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='community',
            name='name',
            field=models.CharField(max_length=1024, verbose_name=b'Community Name'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='community',
            name='sightings_anonymous',
            field=models.BooleanField(default=False, verbose_name=b'Report Sightings Anonymously?'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='community',
            name='sightings_configuration',
            field=models.CharField(default=b'Auto', max_length=255, verbose_name=b'Sightings Mode', choices=[(b'Auto', b'Auto'), (b'Manual', b'Manual')]),
            preserve_default=True,
        ),
    ]
