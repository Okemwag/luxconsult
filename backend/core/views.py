# properties/views.py

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import EmailMessage
from rest_framework import generics
from .models import Property
from .serializers import PropertySerializer

@csrf_exempt
def handle_form_submission(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        interest = data.get('interest')

        
        
        email_subject = 'New Form Submission'
        email_body = f'Name: {name}\nEmail: {email}\nInterest: {interest}'
        to_email = 'gabrielokemwa83@gmail.com'  
        email = EmailMessage(email_subject, email_body, to=[to_email])
        email.send()

        return JsonResponse({'message': 'Form submitted successfully'})
    else:
        return JsonResponse({'message': 'Invalid request method'}, status=405)


class PropertyForSaleView(generics.ListAPIView):
    serializer_class = PropertySerializer
    

    def get_queryset(self):
        return Property.objects.filter(property_status='For Sale').order_by('-created')

class PropertyForRentView(generics.ListAPIView):
    serializer_class = PropertySerializer

    def get_queryset(self):
        return Property.objects.filter(property_status='For Rent').order_by('-created')


class PropertyDetailView(generics.RetrieveAPIView):
    serializer_class = PropertySerializer
    queryset = Property.objects.all()
    lookup_field = 'id'