from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.audiobook_list, name='audiobook_list'),
    path('<slug:custom_url>/', views.audiobook_detail, name='audiobook_detail'),

]