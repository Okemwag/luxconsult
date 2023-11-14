from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.parsers import FileUploadParser
from .models import Property, VideoTour
from .serializers import PropertySerializer, VideoTourSerializer


"""
# views.py


from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status



"""


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


class VideoTourView(generics.RetrieveAPIView):
    serializer_class = VideoTourSerializer
    queryset = Property.objects.all()
    lookup_field = 'id' 

class VideoUploadView(APIView):
    parser_classes = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        file_serializer = VideoTourSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, *args, **kwargs):
        video = VideoTour.objects.all()
        serializer = VideoTourSerializer(video, many=True)
        return Response(serializer.data)