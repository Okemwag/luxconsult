# properties/serializers.py

from rest_framework import serializers
from .models import Property

class PropertySerializer(serializers.ModelSerializer):
    main_photo = serializers.SerializerMethodField()


    

    class Meta:
        model = Property
        fields = ['id','title', 'address',"main_photo",
                   'price','bedrooms','is_published', 'created'
                   ,'modified','property_status']
        
    def get_main_photo(self, property):
        
        photo_url = property.main_photo.url
        base_url = 'https://luxadmin.live'
        return base_url + photo_url
        
        
        
