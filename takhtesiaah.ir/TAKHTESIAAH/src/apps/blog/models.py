from django.db import models
from django.utils.text import slugify

class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)
            slug = base_slug
            counter = 1
            while Post.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

class PostImage(models.Model):
    post = models.ForeignKey(Post, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='blog_images/')

class PostVideo(models.Model):
    post = models.ForeignKey('Post', related_name='videos', on_delete=models.CASCADE)
    video_file = models.FileField(upload_to='blog_videos/', blank=True, null=True)
    video_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"Video for {self.post.title}"