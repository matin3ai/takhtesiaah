from django.db import models
from django.urls import reverse
from django.core.validators import FileExtensionValidator, RegexValidator
from os.path import join
import uuid


def audio_upload_path(instance, filename):
    ext = filename.split('.')[-1]
    return join('audio_files', f"{uuid.uuid4()}.{ext}")


def cover_upload_path(instance, filename):
    ext = filename.split('.')[-1]
    return join('audio_cover_img', f"{uuid.uuid4()}.{ext}")


class AudioBook(models.Model):
    title = models.CharField(
        max_length=200,
        verbose_name="عنوان صفحه کتاب صوتی",
        help_text="عنوانی که در لیست پخش نمایش داده می‌شود. مثلاً متن نوشته شده در فهرست کتاب برای این صفحه.",
    )

    audio_file = models.FileField(
        upload_to=audio_upload_path,
        validators=[FileExtensionValidator(allowed_extensions=["mp3", "wav", "ogg"])],
        verbose_name="فایل صوتی",
        help_text="فایل صوتی صفحه کتاب را اینجا آپلود کنید.",
    )

    custom_url = models.SlugField(
        max_length=100,
        unique=True,
        validators=[
            RegexValidator(regex=r'^\d+$', message="فقط عدد مجاز است."),
        ],
        verbose_name="آدرس صفحه کتاب",
        help_text="شماره صفحه کتاب به انگلیسی (فقط عدد). مثل: 6 یا 10.",
    )

    cover_image = models.ImageField(
        upload_to=cover_upload_path,
        validators=[FileExtensionValidator(allowed_extensions=["jpg", "jpeg", "png"])],
        null=True,
        blank=True,
        verbose_name="تصویر جلد",
        help_text="تصویر جلد کتاب را آپلود کنید (همه صفحات یک تصویر یکسان داشته باشند).",
    )

    description = models.TextField(
        max_length=500,
        null=True,
        blank=True,
        verbose_name="حروف الفبای صفحه",
        help_text="فقط حروف الفبا را بنویسید. مثال: الف، ب، پ، ت، ...",
    )

    index = models.PositiveIntegerField(
        default=0,
        verbose_name="شماره ترتیب",
        help_text="ترتیب نمایش در لیست پخش. فقط عدد وارد کنید.",
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="تاریخ ایجاد",
    )

    class Meta:
        verbose_name = "صفحه کتاب صوتی"
        verbose_name_plural = "صوت‌های کتاب خوانداری چاپ ششم"
        ordering = ["index", "created_at"]

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("audiobook_detail", args=[self.custom_url])