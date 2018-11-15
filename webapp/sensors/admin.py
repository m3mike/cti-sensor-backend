from django.contrib import admin

from sensors.models import Sensor


class SensorAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'host',
        'ruleset_loaded',
        'salt_key',
        'notes'
    ]
    exclude = ['last_load', 'last_conn', 'enabled']


admin.site.register(Sensor, SensorAdmin)
