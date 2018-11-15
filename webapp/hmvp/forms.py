from __future__ import unicode_literals

try:
    from collections import OrderedDict
except ImportError:
    OrderedDict = None

from django import forms

from account.models import SignupCode

__author__ = 'mike'
"""
forms.py.py 
@author: mike

"""

