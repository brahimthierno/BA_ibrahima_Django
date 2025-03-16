# projects/serializers.py
from rest_framework import serializers
from .models import Project, Task

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ['id', 'titre', 'description', 'creator', 'created_at']


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'status', 'project', 'assigned_to']