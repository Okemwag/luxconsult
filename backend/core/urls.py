# properties/urls.py

from django.urls import path
from .views import PropertyListCreateView, PropertyDetailView

urlpatterns = [
    path('api/properties/', PropertyListCreateView.as_view(), name='property-list-create'),
    path('api/properties/<int:pk>/', PropertyDetailView.as_view(), name='property-detail'),
]
