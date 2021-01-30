import datetime

from django.db import models
from django.utils import timezone, dateformat

formatted_date = dateformat.format(timezone.localtime(), 'm-d')
formatted_time = dateformat.format(timezone.localtime(), 'H:i')


# Create your models here.
class History(models.Model):
    description = models.TextField(
        blank=True,
        null=False
    )
    pub_date = models.DateTimeField(default=timezone.now())

    def __str__(self):
        return self.description