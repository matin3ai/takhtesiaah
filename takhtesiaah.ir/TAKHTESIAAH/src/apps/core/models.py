from django.db import models
from django.utils.text import slugify


class Book(models.Model):
    """Model representing a book in the library."""

    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True) # Slug field for URL-friendly representation
    author = models.CharField(max_length=100)  
    description = models.TextField()
    full_description = models.TextField(blank=True, null=True)
    price =  models.PositiveIntegerField(default=0)
    cover_image = models.ImageField(upload_to='book_covers/') 

    def __str__(self):
        return self.title
    
    # Automatically generate a slug from the title if not provided
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)