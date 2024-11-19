from django.urls import path
from . import views

urlpatterns = [
    path('clientes/', views.ClienteListView.as_view(), name='cliente-list'),
    path('productos/', views.ProductoListView.as_view(), name='producto-list'),
]