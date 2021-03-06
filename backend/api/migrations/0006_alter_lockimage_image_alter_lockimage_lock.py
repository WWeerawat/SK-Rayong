# Generated by Django 4.0.5 on 2022-06-27 15:58

import api.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_lock_health_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lockimage',
            name='image',
            field=models.ImageField(upload_to=api.models.LockImage.get_image_filename, verbose_name='รูปภาพในล็อค'),
        ),
        migrations.AlterField(
            model_name='lockimage',
            name='lock',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='images', to='api.lock', verbose_name='ขื่อล็อค'),
        ),
    ]
