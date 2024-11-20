from django.urls import path
from . import views


urlpatterns = [
    path('clientes/', views.ClienteListView.as_view(), name='cliente-list'),
    path('productos/', views.ProductoListView.as_view(), name='producto-list'),
    path('ventas/registrar', views.RegistrarVentaView.as_view(), name='registrar-venta'),
    path('ventas/', views.VentaListView.as_view(), name='ventas-list'),
]