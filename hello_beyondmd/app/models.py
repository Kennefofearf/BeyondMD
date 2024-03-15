from django.db import models

# Creates the Pokemon model used.

class Pokemon(models.Model):
    no = models.CharField(max_length=3)
    name = models.CharField(max_length=15)