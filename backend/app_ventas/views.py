from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Cliente, Producto, CabeceraVenta
from .serializers import ClienteSerializer, ProductoSerializer, VentaSerializer

class ClienteListView(ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class ProductoListView(ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class RegistrarVentaView(APIView):
    def post(self, request):
        serializer = VentaSerializer(data=request.data)
        if serializer.is_valid():
            venta = serializer.save()
            return Response({"message": "Venta registrada exitosamente", "venta_id": venta.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VentaListView(ListCreateAPIView):
    queryset = CabeceraVenta.objects.all()
    serializer_class = VentaSerializer
