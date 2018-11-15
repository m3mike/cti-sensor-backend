from django.conf.urls import patterns, include, url
from alerts.views import AlertsListJson, AlertList

urlpatterns = patterns('',
                   #    url(r'^dashboard/$', 'alerts.views.dash', name='alert_dashboard'),
                       url(
                           regex=r'^list_json/$',
                           view=AlertsListJson.as_view(),
                           name='alerts_list_json',
                       ),
                       url(r'^alerts/$', AlertList.as_view()),


                       )
