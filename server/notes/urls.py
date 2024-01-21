from rest_framework import routers
from .api import NotesViewSet

router = routers.DefaultRouter()

router.register('api/notes', NotesViewSet, 'notes')

urlpatterns = router.urls