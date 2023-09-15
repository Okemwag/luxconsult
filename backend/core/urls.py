# properties/urls.py

from django.urls import path
from .views import PropertyListCreateView, PropertyDetailView

urlpatterns = [
    path('all/', PropertyListCreateView.as_view(), name='property-list-create'),
    path('details/<int:pk>/', PropertyDetailView.as_view(), name='property-detail'),
]
