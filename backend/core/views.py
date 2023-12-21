#from django.views.decorators.cache import cache_page
from rest_framework import generics
from .models import Property
from .serializers import PropertySerializer

class PropertyForSaleView(generics.ListAPIView):
    """
    Lists all properties for sale
    """
    queryset = Property.objects.filter(property_status='For Sale').order_by('-created')
    serializer_class = PropertySerializer
    


class PropertyForRentView(generics.ListAPIView):
    """
    Lists all rental properties
    """
    queryset = Property.objects.filter(property_status='For Rent').order_by('-created')
    serializer_class = PropertySerializer
    
    


class PropertyDetailView(generics.RetrieveAPIView):
    """
    Retrieves a property details by id
    """
    serializer_class = PropertySerializer
    queryset = Property.objects.all()
    lookup_field = 'id'




class VideoTourView(generics.RetrieveAPIView):
    """
    Retrieves a property video tour by id
    """
    serializer_class = PropertySerializer
    queryset = Property.objects.all()
    lookup_field = 'id'

    