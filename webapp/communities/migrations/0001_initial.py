# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Community',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=1024)),
                ('conn_host', models.IPAddressField()),
                ('conn_user', models.CharField(max_length=1024)),
                ('conn_pass', models.CharField(max_length=1024)),
                ('conn_ssl_cert', models.FilePathField()),
                ('conn_ssl_cert_enabled', models.BooleanField(default=False)),
                ('conn_ssl_cert_pass', models.CharField(max_length=1024)),
                ('enabled', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('last_conn', models.DateTimeField(auto_now=True)),
                ('sightings_configuration', models.CharField(default=b'Auto', max_length=255, choices=[(b'Auto', b'Auto'), (b'Manual', b'Manual')])),
                ('sightings_anonymous', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name_plural': 'Communities',
            },
            bases=(models.Model,),
        ),
    ]
