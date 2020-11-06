from django.db import models

class Todo(models.Model):
    name = models.CharField(max_length=300)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.name
