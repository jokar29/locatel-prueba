from django.shortcuts import render

from rest_framework.generics import ListCreateAPIView
from .models import Cliente
from .models import Producto
from .serializers import ClienteSerializer
from .serializers import ProductoSerializer

class ClienteListView(ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class ProductoListView(ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
