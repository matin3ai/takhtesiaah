from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from apps.blog.models import Post

class StaticSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.8

    def items(self):
        return ['core:home', 'blog:blog_list']

    def location(self, item):
        return reverse(item)

class BlogSitemap(Sitemap):
    changefreq = 'daily'
    priority = 0.9

    def items(self):
        return Post.objects.all()

    def location(self, obj):
        return reverse('blog:blog_detail', args=[obj.slug])

    def lastmod(self, obj):
        return obj.created_at