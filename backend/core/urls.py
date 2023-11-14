# properties/urls.py
from django.urls import path
from .views import PropertyForSaleView,PropertyForRentView, PropertyDetailView,VideoUploadView


urlpatterns = [
    path('for-sale/', PropertyForSaleView.as_view(),
         name='property-for-sale'),
    path('for-rent/', PropertyForRentView.as_view(),
         name='property-for-rent'),
    path('detail/<int:id>/', PropertyDetailView.as_view(),
         name='property-detail'),
    path('upload/', VideoUploadView.as_view(), name='video-upload'),
    
]
