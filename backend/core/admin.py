from django.contrib import admin
from .models import Property

# Register your models here.
@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ('title', 'address', 'price', 'bedrooms', 'is_published', 'property_status')
    list_editable = ('is_published',)
    list_filter = ('property_status',)
    search_fields = ('title', 'address', 'price', 'bedrooms', 'is_published', 'property_status')
    list_per_page = 25
