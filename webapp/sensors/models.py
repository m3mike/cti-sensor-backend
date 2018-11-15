from django.db import models


class Sensor(models.Model):
    name = models.CharField(max_length=255, verbose_name="Sensor Name")
    host = models.CharField(max_length=1024, verbose_name="Sensor Hostname")
    enabled = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    ruleset_loaded = models.CharField(max_length=255, verbose_name='Indicator Set Loaded')   ## TODO: Add rules model
    last_load = models.DateTimeField(auto_created=True, auto_now=True)
    last_conn = models.DateTimeField(auto_created=True, auto_now=True)
    salt_key = models.CharField(max_length=255, verbose_name="Connection Key")
    notes = models.TextField(default='')

    class Meta:
        verbose_name = "Sensor"
        verbose_name_plural = "Sensors"


