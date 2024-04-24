# properties/serializers.py

from rest_framework import serializers
from .models import Property

class PropertySerializer(serializers.ModelSerializer):
    main_photo = serializers.SerializerMethodField()
    photo1 = serializers.SerializerMethodField()
    photo2 = serializers.SerializerMethodField()
    photo3 = serializers.SerializerMethodField()
    photo4 = serializers.SerializerMethodField()
    photo5 = serializers.SerializerMethodField()


    

    class Meta:
        model = Property
        fields = ['id','title', 'address',"main_photo",
                   'price','bedrooms','is_published', 'created'
                   ,'modified','property_status',
                   'photo1','photo2','photo3','photo4','photo5']
        
    def get_main_photo(self, property):
        
        photo_url = property.main_photo.url
        # base_url = 'http://102.133.146.44:80'
        base_url = 'https://luxadmin.live'
        return base_url + photo_url
        
    
    def get_photo1(self, property):
        if property.photo1:  # Check if photo1 field has a value
            photo_url = property.photo1.url
            base_url = 'https://luxadmin.live'
            return base_url + photo_url
        else:
            return None  # or any default value you want to return

    
    def get_photo2(self, property):
        if property.photo2:  # Check if photo1 field has a value
            photo_url = property.photo2.url
            base_url = 'https://luxadmin.live'
            return base_url + photo_url
        else:
            return None  # or any default value you want to return
        
    def get_photo3(self, property):
        if property.photo3:  # Check if photo1 field has a value
            photo_url = property.photo3.url
            base_url = 'https://luxadmin.live'
            return base_url + photo_url
        else:
            return None  # or any default value you want to return
        
    def get_photo4(self, property):
        if property.photo4:  # Check if photo1 field has a value
            photo_url = property.photo4.url
            base_url = 'https://luxadmin.live'
            return base_url + photo_url
        else:
            return None  # or any default value you want to return
    
    def get_photo5(self, property):
        if property.photo5:  # Check if photo1 field has a value
            photo_url = property.photo5.url
            base_url = 'https://luxadmin.live'
            return base_url + photo_url
        else:
            return None  # or any default value you want to return
        
    
    
