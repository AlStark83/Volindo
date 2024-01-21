from django.shortcuts import render

# Create your views here.
def list_notes(request):
  return render(request, 'list_notes.html')