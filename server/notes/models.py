from django.db import models

# Create your models here.
class Notes(models.Model):
  title = models.CharField(max_length=100, unique=True)
  description = models.TextField(max_length=1000)