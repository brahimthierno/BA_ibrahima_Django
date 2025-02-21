from django.urls import path
from .import views


urlpatterns = [
    path('', views.home, name='home'),  # Page d'accueil
    path('register/', views.register, name='register'),
    path('profile/', views.profile, name='profile'),
    path('dashboard/', views.dashboard, name='dashboard'),
]