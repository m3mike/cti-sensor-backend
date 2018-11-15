from models import *
from rest_framework_mongoengine.serializers import DocumentSerializer
from rest_framework_mongoengine.validators import UniqueValidator


class AlertSerializer(DocumentSerializer):
    class Meta:
        model = Alert
        depth = 3
