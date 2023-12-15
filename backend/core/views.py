from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.parsers import FileUploadParser
from .models import Property, VideoTour
from .serializers import PropertySerializer, VideoTourSerializer



class PropertyForSaleView(generics.ListAPIView):
    """
    Lists all properties for sale
    """
    serializer_class = PropertySerializer

    def get_queryset(self):
        return Property.objects.filter(property_status='For Sale').order_by('-created')


class PropertyForRentView(generics.ListAPIView):
    """
    Lists all rental  properties 
    """
    serializer_class = PropertySerializer

    def get_queryset(self):
        return Property.objects.filter(property_status='For Rent').order_by('-created')


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
    serializer_class = VideoTourSerializer
    queryset = VideoTour.objects.all()
    lookup_field = 'id' 

