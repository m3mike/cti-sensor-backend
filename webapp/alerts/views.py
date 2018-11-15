import collections
import traceback

from django.conf import settings

from django.shortcuts import render, redirect

from django.core.urlresolvers import reverse

from django.contrib.auth.decorators import login_required
from django.shortcuts import render_to_response
from django_datatables_view.base_datatable_view import BaseDatatableView
from rest_framework.permissions import IsAdminUser
from rest_framework_mongoengine import generics
from alerts.serializers import AlertSerializer

from models import Alert, AlertMeta, AlertSource, GeoIp, EmbeddedAlert


def dash(request):
    return render_to_response('base.html')


class AlertsListJson(BaseDatatableView):
    model = Alert
    columns = ['event', 'indicator', 'observable', 'src_ip', 'src_port', 'dest_ip', 'dest_port',
               'signature_id', 'category', 'severity']

    order_columns = ['event', 'indicator', 'observable', 'src_ip', 'src_port', 'dest_ip', 'dest_port',
                     'signature_id', 'category', 'severity']


    # columns = ['value', 'category', 'record_date', 'record_time',
    # 'notes', 'tags', 'actions']
    # order_columns = ['value', 'category', 'record_date', 'record_time', 'notes']
    max_display_length = 500


class AlertList(generics.ListCreateAPIView):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer
    paginate_by = 10