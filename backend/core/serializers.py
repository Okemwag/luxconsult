# properties/serializers.py

from rest_framework import serializers
from .models import Property, VideoTour

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'
        
        
        
class VideoTourSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoTour
        fields = '__all__'