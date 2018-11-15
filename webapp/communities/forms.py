from django.forms import ModelForm
from communities.models import Community


class CommunityForm(ModelForm):
    class Meta:
        model = Community

    fields = ['name',
              'sightings_configuration',
              'sightings_anonymous',
              'conn_host',
              'conn_user',
              'conn_pass', ]
