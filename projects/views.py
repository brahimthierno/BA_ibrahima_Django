from django.shortcuts import render
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from rest_framework.permissions import IsAuthenticated

from rest_framework import generics

from django import forms
from .forms import ProjectForm


from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer

class ProjectView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TaskView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

@login_required
def project_list(request):
    projects = Project.objects.filter(creator=request.user)
    return render(request, 'project_list.html', {'projects': projects})

@login_required
def project_create(request):
    if request.method == 'POST':
        form = ProjectForm(request.POST)
        if form.is_valid():
            project = form.save(commit=False)
            project.creator = request.user
            project.save()
            return redirect('project_list')
    else:
        form = ProjectForm()
    
    return render(request, 'project_form.html', {'form': form})

@login_required
def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk, creator=request.user)
    return render(request, 'project_detail.html', {'project': project})

# @login_required
# def project_update(request, pk):
#     project = get_object_or_404(Project, pk=pk, creator=request.user)
#     if request.method == 'POST':
#         project.title = request.POST['title']
#         project.description = request.POST['description']
#         project.save()
#         return redirect('project_detail', pk=pk)
#     return render(request, 'project_form.html', {'project': project})


@login_required
def project_update(request, pk):
    project = get_object_or_404(Project, pk=pk, creator=request.user)
    if request.method == 'POST':
        form = ProjectForm(request.POST, instance=project)
        if form.is_valid():
            form.save()
            return redirect('project_detail', pk=pk)
    else:
        form = ProjectForm(instance=project)
    return render(request, 'project_form.html', {'form': form})

@login_required
def project_delete(request, pk):
    project = get_object_or_404(Project, pk=pk, creator=request.user)
    if request.method == 'POST':
        project.delete()
        return redirect('project_list')
    return render(request, 'project_confirm_delete.html', {'project': project})


#essai
from django.shortcuts import render, get_object_or_404, redirect
from .models import Task
from .forms import TaskForm

def task_create(request, pk):
    project = get_object_or_404(Project, pk=pk)  # Récupère le projet
    if request.method == "POST":
        form = TaskForm(request.POST)
        if form.is_valid():
            task = form.save(commit=False)
            task.project = project  # Associe la tâche au projet
            task.save()
            return redirect('project_detail', pk=project.pk)  # Redirige vers le détail du projet
    else:
        form = TaskForm()

    return render(request, 'task_form.html', {'form': form, 'project': project})
