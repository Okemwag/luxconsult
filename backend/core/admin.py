from django.contrib import admin
from .models import Property

# Register your models here.
@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ['title', 'address', 
                    'price', 'bedrooms', 
                    'is_published', 
                    'property_status']
    list_filter = ['title', 'address', 
                   'price', 'bedrooms', 
                   'is_published', 'created',
                   'modified', 'property_status']
    search_fields = ['title', 'address']
    date_hierarchy = 'created'
    ordering = ['title', 'address', 'price', 
                'bedrooms', 'is_published',
                'created', 'modified',
                'property_status']    