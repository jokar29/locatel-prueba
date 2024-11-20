from django.contrib import admin
from .models import Cliente, Producto, CabeceraVenta, DetalleVenta

admin.site.register(Cliente)
admin.site.register(Producto)
admin.site.register(CabeceraVenta)
admin.site.register(DetalleVenta)
