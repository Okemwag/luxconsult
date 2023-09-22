# properties/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('for-sale/', views.PropertyForSaleView.as_view(), name='property-for-sale'),
    path('for-rent/', views.PropertyForRentView.as_view(), name='property-for-rent'),
    path('detail/<int:id>/', views.PropertyDetailView.as_view(), name='property-detail'),
    path('api/handle_form_submission/', views.handle_form_submission, name='handle_form_submission'),
]

