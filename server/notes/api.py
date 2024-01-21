from .models import Notes
from rest_framework import viewsets, permissions
from .serializers import NotesSerializers

class NotesViewSet(viewsets.ModelViewSet):
  queryset= Notes.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = NotesSerializers