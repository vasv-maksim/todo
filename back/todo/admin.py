from django.contrib import admin
from .models import Todo

class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'done')
    list_display_links = ('id', 'name', 'done')
    search_fields = ('id', 'name', 'done')

admin.site.register(Todo, TodoAdmin)


