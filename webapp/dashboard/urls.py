from django.conf.urls import patterns, url, include
from django.conf import settings

import dashboard.views
import dashboard.models

__author__ = 'mike'
"""
urls.py 
@author: mike

"""

urlpatterns = patterns(
        url(r'^dashboard$', view=dashboard.views.dash, name='dashboard'),

)