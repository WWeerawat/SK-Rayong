from django.db import models
from django.utils.text import slugify

# Create your models here.
class Phase(models.Model):
    def get_image_filename(instance, filename):
        title = instance.name
        slug = slugify(title)
        return "layout_image/%s-%s" % (slug, filename)

    name = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    videoView = models.URLField(max_length=100)
    videoNearby = models.URLField(max_length=100)
    location = models.URLField(max_length=100)
    layoutImage = models.ImageField(upload_to=get_image_filename, verbose_name="Image")
    slug = models.SlugField(blank=True, max_length=255, unique=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Phase, self).save(*args, **kwargs)


class PhaseImage(models.Model):
    def get_image_filename(instance, filename):
        title = instance.phase.name
        slug = slugify(title)
        return "phase_images/%s/%s" % (slug, filename)

    phase = models.ForeignKey(Phase, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_image_filename, verbose_name="Image")
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.phase.name + self.image


class Lock(models.Model):
    phase = models.ForeignKey(Phase, default=None, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    price = models.IntegerField()
    monthly = models.FloatField()
    area = models.FloatField()
    videoView = models.URLField(max_length=100)
    videoNearby = models.URLField(max_length=100)
    location = models.URLField(max_length=100)
    slug = models.SlugField(blank=True, max_length=255, unique=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Lock, self).save(*args, **kwargs)


class LockImage(models.Model):
    def get_image_filename(instance, filename):
        title = instance.phase.name
        slug = slugify(title)
        return "phase_images/%s/%s" % (slug, filename)

    lock = models.ForeignKey(Lock, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_image_filename, verbose_name="Image")
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.lcok.name + self.image


class Nearyby(models.Model):
    lock = models.ForeignKey(Lock, default=None, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    distance = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    link = models.URLField(max_length=100)

    def __str__(self):
        return self.name
