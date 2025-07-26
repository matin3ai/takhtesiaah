from django.contrib import admin
from .models import Post, PostImage, PostVideo

class PostImageInline(admin.TabularInline):
    model = PostImage
    extra = 1

class PostVideoInline(admin.TabularInline):
    model = PostVideo
    extra = 1

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    inlines = [PostImageInline, PostVideoInline]
    list_display = ['title', 'created_at']