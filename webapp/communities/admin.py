from django.contrib import admin

from communities.models import Community


class CommunityAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'sightings_configuration',
        'sightings_anonymous',
        'conn_host',
        'conn_user',
        'conn_pass',
    ]
    exclude = ['enabled']

admin.site.register(Community, CommunityAdmin)
