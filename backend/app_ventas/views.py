from django.shortcuts import render

from rest_framework.generics import ListCreateAPIView
from .models import Cliente
from .serializers import ClienteSerializer

class ClienteListView(ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
