from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
#######  for react to run on port 800 ############
from django.views.generic import TemplateView

urlpatterns = [
    #######  for react to run on port 800 ############
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
    
    path('hotel/', include("hotel_app.urls")),
    path('api/', include("rest_framework.urls")),
    path('accounts/', include('accounts.urls')),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
#######  for react to run on port 800 ############
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
