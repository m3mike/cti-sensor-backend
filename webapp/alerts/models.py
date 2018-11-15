from mongoengine import *
from mongoengine.connection import get_connection, get_db
from mongoengine.context_managers import query_counter, switch_db
from mongoengine.queryset import (QuerySet, QuerySetManager,
                                  MultipleObjectsReturned, DoesNotExist,
                                  queryset_manager)


MAX_PROTO_LENGTH = 5

# from sensors.models import Sensor


# class AlertManager(QuerySetManager):
#     def by_sensor(self, sensor, **kwargs):
#         """
#         Filter by sensor
#         :param selfself:
#         :param sensor:
#         :param kwargs:
#         :return:
#         """
#         pass
#
#     def by_date(self, start_date, end_date, sensor, **kwargs):
#         """
#         Filter by sensor/date range
#         :param start_date:
#         :param end_date:
#         :param sensor:
#         :param kwargs:
#         :return:
#         """
#         resultset = self.by_sensor(sensor).filter(record_date_gte=start_date, record_date_lte=end_date)
#
#         return resultset.order_by('-record_date', '-record_time')
#
#     def by_severity(self, start_date, end_date, sensor, **kwargs):
#         """
#         Group alerts by severity
#         :param selfself:
#         :param start_date:
#         :param end_date:
#         :param sensor:
#         :param kwargs:
#         :return:
#         """
#         data = self.by_date(start_date, end_date, sensor)
#         data_count = data.count()
#         return data.values('severity__name').annotate(count=data_count).order_by('severity')
class Severity(Document):
    """
    List of severities
    """
    level = IntField(min_value=1, max_value=5)


class GeoIp(EmbeddedDocument):
    country_code3 = StringField(max_length=10)
    country_name = StringField()
    timezone = StringField()
    latitude = DecimalField()
    longitude = DecimalField()
    ip = StringField()
    country_code2 = StringField()
    continent_code = StringField()
    coordinates = ListField()
    location = ListField()


class AlertMeta(EmbeddedDocument):
    signature_id = DecimalField()
    rev = DecimalField()
    gid = FloatField()
    indicator = StringField()
    signature = StringField()
    category = StringField()
    severity = DecimalField()
    action = StringField()


class AlertSource(EmbeddedDocument):
    dest_port = DecimalField()
    type = StringField()
    file = StringField()
    timestamp = DateTimeField()
    host = StringField()
    event_type = StringField()
    src_port = DecimalField()
    dest_ip = StringField()
    proto = StringField()
    src_ip = StringField()
    alert = EmbeddedDocumentField(AlertMeta)
    geoip = EmbeddedDocumentField(GeoIp)
    _timestamp = DateTimeField(db_field='@timestamp')
    offset = IntField()
    _version = IntField(db_field='@version')


class Alert(Document):
    """
    Alert document
    """
    _index = StringField()
    _type = StringField()
    _source = EmbeddedDocumentField(AlertSource)
    _score = FloatField()
    meta = {'collection': 'eve'}



# sensor = ReferenceField(Sensor)
# indicator = StringField()
# observable = StringField()
# protocol = StringField(max_length=MAX_PROTO_LENGTH)
# source_doc = StringField()
# community = StringField()
#
# event = DateTimeField()
# shared = BooleanField()
# severity = IntField(min_value=1, max_value=5)
# src_ip = StringField()
# src_port = IntField()
# dest_ip = StringField()
# dest_port = IntField()
# category = StringField()
# signature_id = StringField()

meta = {'collection': 'eve'}


class EmbeddedAlert(EmbeddedDocument):
    action = StringField()
    gid = FloatField()
    signature_id = FloatField()
    rev = IntField()
    signature = StringField()
    category = StringField()
    severity = IntField()

