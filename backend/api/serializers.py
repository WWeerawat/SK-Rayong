from rest_framework import serializers
from .models import LayoutImage, Lock, LockImage, Nearyby, Phase, PhaseImage


class LockImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = LockImage
        fields = ["id", "image"]


class LayoutImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = LayoutImage
        fields = ["id", "image"]


class NearybySerializer(serializers.ModelSerializer):
    class Meta:
        model = Nearyby
        fields = "__all__"


class LockSerializer(serializers.ModelSerializer):
    images = LockImageSerializer(many=True, read_only=True)
    videoViewLink = serializers.SerializerMethodField("get_view_link")
    videoNearbyLink = serializers.SerializerMethodField("get_nearby_link")

    def convert_ytframe(self, url):
        video_id = url.split("watch?v=")
        return video_id[1]

    def get_view_link(self, obj):
        return self.convert_ytframe(obj.videoView)

    def get_nearby_link(self, obj):
        return self.convert_ytframe(obj.videoNearby)

    class Meta:
        model = Lock
        fields = ["id", 'phase', 'name', 'description', 'price', 'monthly', 'area', 'images',
                  'videoViewLink', 'videoNearbyLink', 'location', 'updated', 'created']


class PhaseImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhaseImage
        fields = ["id", "image"]


class PhaseSerializer(serializers.ModelSerializer):
    phase_images = PhaseImageSerializer(many=True, read_only=True)
    layout_images = LayoutImageSerializer(many=True, read_only=True)
    phase_lock = LockSerializer(many=True, read_only=True)

    videoViewLink = serializers.SerializerMethodField("get_view_link")
    videoNearbyLink = serializers.SerializerMethodField("get_nearby_link")

    def convert_ytframe(self, url):
        video_id = url.split("watch?v=")
        return video_id[1]

    def get_view_link(self, obj):
        return self.convert_ytframe(obj.videoView)

    def get_nearby_link(self, obj):
        return self.convert_ytframe(obj.videoNearby)

    class Meta:
        model = Phase
        fields = ["id", 'name', 'description', 'phase_images', 'layout_images', 'phase_lock',
                  'videoViewLink', 'videoNearbyLink', 'health_description', 'location', 'updated', 'created']
