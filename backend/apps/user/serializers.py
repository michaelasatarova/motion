from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.hobby.serializers import HobbySerializer

User = get_user_model()


class NestedUserSerializer(serializers.ModelSerializer):
    hobby =HobbySerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'country', 'city', 'about', 'avatar','hobby']
        ref_name = None  # Prevents yasg docs from displaying 'NestedUser' as model name for nested user fields


class PrivateUserSerializer(serializers.ModelSerializer):
    followers = NestedUserSerializer(many=True, read_only=True)
    followees = NestedUserSerializer(many=True, read_only=True)
    friends = NestedUserSerializer(many=True, read_only=True)

    # TODO: Add hobbies (and posts, liked_posts, comments?) field once implemented on each of the models
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'country', 'city', 'about', 'avatar',
                  'followers', 'followees', 'friends']


class PublicUserSerializer(serializers.ModelSerializer):
    hobby =HobbySerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'country', 'city', 'about', 'avatar','hobby']
