# properties/views.py

from rest_framework import generics
from .models import Property
from .serializers import PropertySerializer

class PropertyForSaleView(generics.ListAPIView):
    serializer_class = PropertySerializer

    def get_queryset(self):
        return Property.objects.filter(property_status='sale').order_by('-list_date')

class PropertyForRentView(generics.ListAPIView):
    serializer_class = PropertySerializer

    def get_queryset(self):
        return Property.objects.filter(property_status='rent').order_by('-list_date')


