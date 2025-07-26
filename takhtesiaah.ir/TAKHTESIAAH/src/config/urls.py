from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from .sitemaps import StaticSitemap, BlogSitemap
# Sitemaps configuration
sitemaps = {
    'static': StaticSitemap,
    'blog': BlogSitemap,

}


# URL configuration for the project
urlpatterns = [
    path('admin/', admin.site.urls),
    path('playlist/khandari/6/', include('apps.playlist.urls')),
    path('', include('apps.core.urls',namespace='core')),
    path('blog/', include('apps.blog.urls',namespace='blog')),
    # Adding the sitemap URL
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'), 
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

