from django.shortcuts import render
from django.http import HttpResponse 
from django.shortcuts import render, get_object_or_404
from .models import Book

def index(request):
    books = Book.objects.all()
    return render(request, 'homepage/base.html', {'books': books})

def book_detail(request, slug):
    book = get_object_or_404(Book, slug=slug)
    return render(request, 'homepage/book_detail.html', {'book': book})

def robots_txt(request):
    content = (
        "User-agent: *\n"
        "Disallow: /admin/\n"
        "Disallow: /private/\n"
        "Disallow: /media/\n"
        "Disallow: /static/\n"
        "Disallow: /confidential/\n"
        "Disallow: /api/\n\n"
        "Allow: /\n"
        "Sitemap: https://takhtesiaah.ir/sitemap.xml"
    )
    return HttpResponse(content, content_type="text/plain")