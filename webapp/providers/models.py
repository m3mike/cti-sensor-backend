from django.db import models


from mongoengine import *
from mongoengine.connection import get_connection, get_db
from mongoengine.context_managers import query_counter, switch_db
from mongoengine.queryset import (QuerySet, QuerySetManager,
                                  MultipleObjectsReturned, DoesNotExist,
                                  queryset_manager)
from common import defaults


class Provider(Document):
    provider_uuid = UUIDField()
    name = StringField()
    org = StringField()
    acct_username = StringField()
    acct_password = StringField()
    contact_email = EmailField()
    data_format = StringField()


class ProviderServer(Document):
    provider_id = ReferenceField(Provider)
    host = StringField()
    proto = StringField(default=defaults.PROVIDER_TAXII)
    proto_ver = StringField(default=defaults.PROVIDER_TAXII_VER)
    endpoint_path = StringField()
