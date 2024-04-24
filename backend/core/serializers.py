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
        # base_url = 'http://102.133.146.44:80'
        base_url = 'https://luxadmin.live'
        return base_url + photo_url
        
    
    def get_photo1(self, property):
        
        photo_url = property.photo1.url
        # base_url = 'http://102.133.146.44:80'
        base_url = 'https://luxadmin.live'
        return base_url + photo_url
    
    def get_photo2(self, property):
        
        photo_url = property.photo2.url
        # base_url = 'http://102.133.146.44:80'
        base_url = 'https://luxadmin.live'
        return base_url + photo_url

    def get_photo3(self, property):
        
        photo_url = property.main_photo3.url
        # base_url = 'http://102.133.146.44:80'
        base_url = 'https://luxadmin.live'
        return base_url + photo_url
    
    def get_photo4(self, property):
        
        photo_url = property.photo4.url
        # base_url = 'http://102.133.146.44:80'
        base_url = 'https://luxadmin.live'
        return base_url + photo_url
    
    def get_photo5(self, property):
        
        photo_url = property.photo5.url
        # base_url = 'http://102.133.146.44:80'
        base_url = 'https://luxadmin.live'
        return base_url + photo_url
        
        
    
    
