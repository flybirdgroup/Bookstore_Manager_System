from django.shortcuts import render


from booktest.models import *
from booktest.serializers import BookInfoSerializer

from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView,UpdateAPIView,DestroyAPIView

# Create your views here.
class BookView(ListAPIView):
    queryset = BookInfo.objects.all()
    serializer_class = BookInfoSerializer


class BooI(object):
    BookInfo.objects.filter(heroinfo__hgender=0).all()
