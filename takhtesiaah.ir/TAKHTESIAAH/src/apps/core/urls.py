from django.urls import path
from . import views

app_name = 'core'

# URL configuration for the core app
# This includes the home page and book detail page, as well as the robots.txt file
urlpatterns = [
    path('', views.index, name='home'),
    path('book/<slug:slug>/', views.book_detail, name='book_detail'),
    # Adding the robots.txt URL
    path('robots.txt',  views.robots_txt),  
]
