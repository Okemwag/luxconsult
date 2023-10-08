from djmoney.models.fields import MoneyField
from django.db import models

# Create your models here.

class Property(models.Model):
    
       
    class PropertyStatus(models.TextChoices):
        FOR_SALE = 'For Sale'
        FOR_RENT = 'For Rent'
    
    title = models.CharField(verbose_name='Property Title', max_length=200)
    address = models.CharField(max_length=200)
    description = models.TextField(verbose_name='Description', 
                                   default='Description of the property', max_length=30)
    price = MoneyField(max_digits=8, decimal_places=0, default_currency='KES')
    bedrooms = models.IntegerField(verbose_name='Number of bedrooms',
                                   default=4)
    main_photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    is_published = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)
    property_status = models.CharField(max_length=20, 
                                       choices=PropertyStatus.choices, default=PropertyStatus.FOR_SALE)
    photo1 = models.ImageField(upload_to='property_photos/',
                               null=True,
                               blank=True)
    photo2 = models.ImageField(upload_to='property_photos/',
                               null=True,
                               blank=True)
    photo3 = models.ImageField(upload_to='property_photos/', 
                               null=True,
                               blank=True)
    photo4 = models.ImageField(upload_to='property_photos/',
                               null=True,
                               blank=True)
    photo5 = models.ImageField(upload_to='property_photos/',
                               null=True,
                               blank=True)
    video = models.FileField(upload_to='videos_uploaded',null=True,
                             blank=True)
    
    
    
    def __str__(self):
        return f"{self.title}"
    
    
