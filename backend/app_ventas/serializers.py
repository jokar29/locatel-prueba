from rest_framework import serializers
from .models import Cliente, Producto, CabeceraVenta, DetalleVenta
from django.db import transaction

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class VentaSerializer(serializers.Serializer):
    
    class Meta:
        model = CabeceraVenta
        fields = '__all__'

    def create(self, validated_data):

        detalles_data = validated_data.pop('detalles')
        with transaction.atomic(): 
            venta = CabeceraVenta.objects.create(**validated_data)
            for detalle in detalles_data:
                DetalleVenta.objects.create(cabecera=venta, **detalle)

        return venta

class DetalleVentaSerializer(serializers.Serializer):
    class Meta:
        model = DetalleVenta
        fields = '__all__'
