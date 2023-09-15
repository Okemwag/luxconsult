import uuid
from django.db import models


class TimeStampedUUIDModel(models.Model):
    """
    An abstract base class model that provides self-updating
    ``created`` and ``modified`` fields with UUID primary key.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)

    class Meta:
        abstract = True



# Create your models here.

class Property(TimeStampedUUIDModel):
    
       
    class PropertyStatus(models.TextChoices):
        FOR_SALE = 'For Sale'
        FOR_RENT = 'For Rent'
    
    title = models.CharField(verbose_name='Property Title', max_length=200)
    address = models.CharField(max_length=200)
    description = models.TextField(verbose_name='Description', default='Description of the property')
    price = models.IntegerField(verbose_name='Price', default=0)
    bedrooms = models.IntegerField(verbose_name='Number of bedrooms', default=0)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_6 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(auto_now_add=True)
    property_status = models.CharField(max_length=20, choices=PropertyStatus.choices, default=PropertyStatus.FOR_SALE)
    
    
    def __str__(self):
        return self.title