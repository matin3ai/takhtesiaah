from django.contrib import admin
from .models import AudioBook
from django.utils.html import format_html


admin.site.site_header = "ادمین پنل تخته‌سیاه"
admin.site.site_title = "کتاب‌های تخته‌سیاه"
admin.site.index_title = "مدیریت محتوا"


@admin.register(AudioBook)
class AudioBookAdmin(admin.ModelAdmin):
    list_display = ('title', 'custom_url', 'index', 'created_at')
    list_editable = ('index',)
    ordering = ('index', 'created_at')
    prepopulated_fields = {"custom_url": ("title",)}
    fieldsets = (
        ("📌 اطلاعات اصلی", {
            "fields": ("title", "custom_url", "description", "index"),
            "description": format_html(
                """
                <div style="background:#1e1e1e;padding:12px;border-radius:8px;font-size:18px;border-right:5px solid #ffc107;">
                    <strong style="color:#ffc107;">راهنما:</strong>
                    <ul style="color:#eee;padding-left:20px;font-size:18px;">
                        <li>🟢 عنوان باید واضح و مرتبط با موضوع صفحه کتاب باشد که میتونی نام حرف را بنویسی.</li>
                        <li>🟢 آدرس فقط باید شامل عدد انگلیسی باشد. مثل: 1، 2، 3، ...</li>
                        <li>🟢 شماره ترتیب برای نمایش در لیست پخش است. فقط عدد وارد کنید.</li>
                        <li>🟢 تاریخ ایجاد به صورت خودکار ثبت می‌شود.</li>  
                    </ul>
                </div>
                """
            )
        }),
        ("🎵 فایل‌ها", {
            "fields": ("audio_file", "cover_image"),
            "description": format_html(
                """
                <div style="background:#1e1e1e;padding:12px;border-radius:8px;border-right:5px solid #4caf50;">
                    <strong style="color:#4caf50;font-size:18px;">راهنمای فرمت:</strong>
                    <ul style="color:#eee;padding-left:20px;">
                        <li><strong>⚠️ صوت:</strong> فقط MP3, WAV, OGG (حداکثر 50حداکثر MB)</li>
                        <li><strong>⚠️ تصویر:</strong> JPG یا PNG با ابعاد مناسب (مثلاً 500×500)</li>
                        <li><strong>✅ برای حذف فایل صوتی یا تصویر، تیک پاک کردن را بزن و سپس ذخیره را کلیک کن.</strong></li>
                    </ul>
                </div>
                    </ul>
                </div>
                """
            )
        }),
    )
