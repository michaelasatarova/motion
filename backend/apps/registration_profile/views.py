from rest_framework import generics, response, status
from django.contrib.auth import get_user_model
from .serializers import RegistrationSerializer, ValidationSerializer
from ..user.serializers import PrivateUserSerializer
from rest_framework.permissions import AllowAny
from drf_yasg.utils import swagger_auto_schema

User = get_user_model()


class RegistrationView(generics.GenericAPIView):
    """
    Create an inactive user with email info only.
    """
    queryset = User
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny]

    @swagger_auto_schema(responses={204: "No Content"})
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(status=status.HTTP_204_NO_CONTENT)


class ValidationView(generics.GenericAPIView):
    """
    Update required user info and activate user.
    """
    serializer_class = ValidationSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return generics.get_object_or_404(User.objects.all(), email=self.request.data.get('email'))

    @swagger_auto_schema(responses={200: PrivateUserSerializer})
    def put(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.get_object(), data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(data=PrivateUserSerializer(self.get_object()).data, status=status.HTTP_200_OK)
