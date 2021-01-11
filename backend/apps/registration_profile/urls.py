from django.urls import path
from .views import RegistrationView, ValidationView

urlpatterns = [
    path('', RegistrationView.as_view()),
    path('validation/', ValidationView.as_view()),
]
