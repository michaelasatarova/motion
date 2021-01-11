from rest_framework import serializers
from .models import Post, Post_Pic
from ..comment.serializers import CommentSimpleSerializer
from apps.user.serializers import NestedUserSerializer


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSimpleSerializer(many=True, read_only=True)
    user = NestedUserSerializer(read_only=True)
    class Meta:
        model = Post
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):

    def validate_user(self, value):
        user = self.context.get('request').user.id
        if 'liked_by' == user:
            raise serializers.ValidationError(
                'You can not like your own posts!')

    class Meta:
        model = Post
        fields = '__all__'

class PostPicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post_Pic
        fields = '__all__'


class FollowesSerilizer(serializers.ModelSerializer):
    #user = PrivateUserSerializer(read_only=True)
    class Meta:
        model = Post
        fields = '__all__'
