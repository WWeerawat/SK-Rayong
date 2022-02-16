# Generated by Django 4.0.2 on 2022-02-10 06:29

import api.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=255)),
                ('price', models.IntegerField()),
                ('monthly', models.FloatField()),
                ('area', models.FloatField()),
                ('videoView', models.URLField(max_length=100)),
                ('videoNearby', models.URLField(max_length=100)),
                ('location', models.URLField(max_length=100)),
                ('slug', models.SlugField(blank=True, max_length=255, unique=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Phase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=255)),
                ('videoView', models.URLField(max_length=100)),
                ('videoNearby', models.URLField(max_length=100)),
                ('location', models.URLField(max_length=100)),
                ('layoutImage', models.ImageField(upload_to=api.models.Phase.get_image_filename, verbose_name='Image')),
                ('slug', models.SlugField(blank=True, max_length=255, unique=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='PhaseImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.PhaseImage.get_image_filename, verbose_name='Image')),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('phase', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.phase')),
            ],
        ),
        migrations.CreateModel(
            name='Nearyby',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=255)),
                ('distance', models.CharField(max_length=100)),
                ('time', models.CharField(max_length=100)),
                ('link', models.URLField(max_length=100)),
                ('lock', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.lock')),
            ],
        ),
        migrations.CreateModel(
            name='LockImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.LockImage.get_image_filename, verbose_name='Image')),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('lock', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.lock')),
            ],
        ),
        migrations.AddField(
            model_name='lock',
            name='phase',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.phase'),
        ),
    ]