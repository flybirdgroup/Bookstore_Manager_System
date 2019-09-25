from rest_framework.serializers import ModelSerializer

from booktest.models import BookInfo


class BookInfoSerializer(ModelSerializer):
    class Meta:
        model = BookInfo
        fields = "__all__"
