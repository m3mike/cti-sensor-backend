# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sensor',
            name='notes',
            field=models.TextField(default=b''),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='sensor',
            name='enabled',
            field=models.BooleanField(default=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='sensor',
            name='host',
            field=models.CharField(max_length=1024, verbose_name=b'Sensor Hostname'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='sensor',
            name='name',
            field=models.CharField(max_length=255, verbose_name=b'Sensor Name'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='sensor',
            name='ruleset_loaded',
            field=models.CharField(max_length=255, verbose_name=b'Indicator Set Loaded'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='sensor',
            name='salt_key',
            field=models.CharField(max_length=255, verbose_name=b'Connection Key'),
            preserve_default=True,
        ),
    ]
