from django.shortcuts import render, get_object_or_404
from .models import AudioBook

def audiobook_detail(request, custom_url):
    audiobook = get_object_or_404(AudioBook, custom_url=custom_url)
    return render(request, 'playlist/base.html', {'audiobook': audiobook})


def audiobook_list(request):
    audiobooks = AudioBook.objects.all().order_by('index')  
    return render(request, 'playlist/audiobook_list.html', {'audiobooks': audiobooks})