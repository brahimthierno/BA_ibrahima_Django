from django.urls import path
from . import views


# projects/urls.py
from django.urls import path, include
from .views import ProjectView, TaskView



urlpatterns = [

    path('listproj/', views.project_list, name='project_list'),
    path('create/', views.project_create, name='project_create'),
    path('<int:pk>/', views.project_detail, name='project_detail'),
    path('<int:pk>/update/', views.project_update, name='project_update'),
    path('<int:pk>/delete/', views.project_delete, name='project_delete'),

    path('api/projects/',ProjectView.as_view(),name='project'),
    path('api/tasks/', TaskView.as_view(), name='task'),

    # ✅ Nouvelle route pour créer une tâche
    path('<int:pk>/tasks/create/', views.task_create, name='task_create'),
    
]
