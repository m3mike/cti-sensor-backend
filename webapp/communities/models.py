from django.db import models


class Community(models.Model):
    name = models.CharField(max_length=1024, verbose_name="Community Name")
    conn_host = models.GenericIPAddressField(verbose_name="Community Host")
    conn_user = models.CharField(max_length=1024, verbose_name="Community Username")
    conn_pass = models.CharField(max_length=1024, verbose_name="Community Password")
    #conn_ssl_cert = models.FileField(verbose_name="SSL Certificate", default=None)
    conn_ssl_cert_enabled = models.BooleanField(default=False, verbose_name="SSL Certificate Enabled?")
    #conn_ssl_cert_pass = models.CharField(max_length=1024, default="")
    enabled = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    last_conn = models.DateTimeField(auto_now=True)
    sightings_configuration = models.CharField(verbose_name="Sightings Mode", max_length=255, default="Auto",
                                               choices=(('auto', 'Automatic'), ('manual', 'Manual')))
    sightings_anonymous = models.BooleanField(default=False, verbose_name="Report Sightings Anonymously?")

    class Meta:
        verbose_name_plural = 'Communities'

