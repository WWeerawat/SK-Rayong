from cmath import phase
import re
from django.db import models
from django.utils.text import slugify


# Create your models here.
def convert_ytframe(url):
    video_id = url.split("watch?v=")
    print(video_id)
    return video_id[1]


class Phase(models.Model):
    def get_image_filename(instance, filename):
        title = instance.phase.name
        slug = slugify(title)
        return "phase_images/%s/%s" % (slug, filename)
    name = models.CharField(max_length=100, verbose_name="ขื่อเฟส")
    description = models.TextField(max_length=255, verbose_name="รายละเอียด")
    videoView = models.CharField(max_length=100, verbose_name="วิดิโอบรรยากาศ")
    videoNearby = models.CharField(
        max_length=100, verbose_name="วิดิโอสถานที่ใกล้เคียง"
    )
    location = models.URLField(max_length=100, verbose_name="ที่อยู่(ลิงก์)")
    health_description = models.TextField(
        null=True, max_length=255, verbose_name="รายละเอียดสาธานูปโภค")
    updated = models.DateTimeField(auto_now=True)

    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class LayoutImage(models.Model):
    def get_image_filename(instance, filename):
        title = instance.phase.name
        slug = slugify(title)
        return "layout_images/%s/%s" % (slug, filename)

    phase = models.ForeignKey(
        Phase,
        default=None,
        related_name="layout_images",
        on_delete=models.CASCADE,
        verbose_name="ขื่อเฟส",
    )
    image = models.ImageField(
        upload_to=get_image_filename, verbose_name="รูปภาพแผนผังเฟส")
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.phase.name


class PhaseImage(models.Model):
    def get_image_filename(instance, filename):
        title = instance.phase.name
        slug = slugify(title)
        return "phase_images/%s/%s" % (slug, filename)

    phase = models.ForeignKey(
        Phase,
        default=None,
        related_name="phase_images",
        on_delete=models.CASCADE,
        verbose_name="ขื่อเฟส",
    )
    image = models.ImageField(
        upload_to=get_image_filename, verbose_name="รูปภาพเฟส")
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.phase.name


class Lock(models.Model):
    phase = models.ForeignKey(
        Phase,
        default=None,
        related_name="phase_lock",
        on_delete=models.CASCADE,
        verbose_name="ขื่อเฟส",
    )
    name = models.CharField(max_length=100, verbose_name="ขื่อล๊อก")
    description = models.TextField(max_length=255, verbose_name="รายละเอียด")
    price = models.IntegerField(verbose_name="ราคา(ไม่หน่อยใส่ ,)")
    monthly = models.FloatField(verbose_name="ราคา/เดือน(ไม่ต้องใส่ ,)")
    area = models.FloatField(verbose_name="ขนาด(ตร.วา)")
    videoView = models.CharField(max_length=100, verbose_name="วิดิโอบรรยากาศ")
    videoNearby = models.CharField(
        max_length=100, verbose_name="วิดิโอสถานที่ใกล้เคียง"
    )
    location = models.URLField(max_length=100, verbose_name="ที่อยู่")
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.phase.name + " " + self.name


class LockImage(models.Model):
    def get_image_filename(instance, filename):
        title = instance.lock.name
        slug = slugify(title)
        return "lock_images/%s/%s" % (slug, filename)

    lock = models.ForeignKey(
        Lock,
        default=None,
        related_name="images",
        on_delete=models.CASCADE,
        verbose_name="ขื่อล็อก",
    )
    image = models.ImageField(
        upload_to=get_image_filename, verbose_name="รูปภาพในล็อก")
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.lock.name


class Nearyby(models.Model):
    phase = models.ForeignKey(
        Phase,
        default=None,
        related_name="nearbies",
        on_delete=models.CASCADE,
        verbose_name="ขื่อเฟส",
    )
    name = models.CharField(max_length=100, verbose_name="ขื่อสถานที่")
    description = models.TextField(max_length=255, verbose_name="รายละเอียด")
    distance = models.CharField(max_length=100, verbose_name="ระยะทาง")
    time = models.CharField(max_length=100, verbose_name="เวลาคาดการณ์")
    link = models.URLField(
        max_length=100, verbose_name="ลิงก์(ถ้ามี) ", blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name
