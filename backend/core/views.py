# properties/views.py
from rest_framework import generics
from .models import Property
from .serializers import PropertySerializer

class PropertyForSaleView(generics.ListAPIView):
    serializer_class = PropertySerializer
    

    def get_queryset(self):
        return Property.objects.filter(property_status='For Sale').order_by('-created')

class PropertyForRentView(generics.ListAPIView):
    serializer_class = PropertySerializer

    def get_queryset(self):
        return Property.objects.filter(property_status='For Rent').order_by('-created')


class PropertyDetailView(generics.RetrieveAPIView):
    serializer_class = PropertySerializer
    queryset = Property.objects.all()
    lookup_field = 'id'