from django.db import models

from mongoengine import *
from mongoengine.connection import get_connection, get_db
from mongoengine.context_managers import query_counter, switch_db
from mongoengine.queryset import (QuerySet, QuerySetManager,
                                  MultipleObjectsReturned, DoesNotExist,
                                  queryset_manager)


class Rule(Document):
    id = UUIDField()
    title = StringField()
    header = StringField()

    src_ip = StringField()
    des_ip = StringField()
    src_port = IntField()
    des_port = IntField()
    protocol = StringField()

    indicator_id = StringField()
    observable_id = StringField()
    source_stix = StringField()
    producer = StringField()
    severity = IntField()

    sid = IntField()
    notes = StringField()

    created = DateTimeField()
    updated = DateTimeField()

    meta = {
        'ordering': 'id',
        'verbose_name_plural': 'Rules'
    }

