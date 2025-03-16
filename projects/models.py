# from django.db import models
# from django.conf import settings

# # Create your models here.


# class Project(models.Model):
#     title = models.CharField(max_length=200)
#     description = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#     creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    
#     def __str__(self):
#         return self.title


#essai
from django.db import models
from django.conf import settings

from users.models import CustomUser


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Task(models.Model):
    STATUS_CHOICES = [
        ('todo', 'À faire'),
        ('in_progress', 'En cours'),
        ('completed', 'Terminé'),
    ]

    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='todo')
    project = models.ForeignKey(Project, related_name="tasks", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)



    assigned_to = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='assigned_tasks')
    def __str__(self):
        return f"{self.title} - {self.description} - ({self.get_status_display()})"
