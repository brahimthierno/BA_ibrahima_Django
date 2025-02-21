from django.shortcuts import render
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Project
from django import forms
from .forms import ProjectForm

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

@login_required
def project_update(request, pk):
    project = get_object_or_404(Project, pk=pk, creator=request.user)
    if request.method == 'POST':
        project.title = request.POST['title']
        project.description = request.POST['description']
        project.save()
        return redirect('project_detail', pk=pk)
    return render(request, 'project_form.html', {'project': project})

@login_required
def project_delete(request, pk):
    project = get_object_or_404(Project, pk=pk, creator=request.user)
    if request.method == 'POST':
        project.delete()
        return redirect('project_list')
    return render(request, 'project_confirm_delete.html', {'project': project})
