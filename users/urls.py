from django.urls import path, include
from .import views
from rest_framework_simplejwt import views as jwttoken




urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('profile/', views.profile, name='profile'),
    path('dashboard/', views.dashboard, name='dashboard'),

    path('login_view/', views.login_view, name='login_view'),

    path('login_view/',jwttoken.TokenObtainPairView.as_view(),name="login_view"),
    path('token/refresh/',jwttoken.TokenRefreshView.as_view(),name="token_refresh"),

]