# from django.contrib import admin
# from .models import Project

# @admin.register(Project)
# class ProjectAdmin(admin.ModelAdmin):
#     list_display = ('title', 'creator', 'created_at')  # Colonnes affichées dans la liste
#     search_fields = ('title', 'creator__username')  # Ajoute une barre de recherche
#     list_filter = ('created_at', 'creator')  # Ajoute des filtres dans l'admin
#     readonly_fields = ('created_at',)  # Rend la date de création non modifiable

#     fieldsets = (
#         ("Informations Générales", {
#             'fields': ('title', 'description', 'creator')
#         }),
#         ("Autres Infos", {
#             'fields': ('created_at',),
#             'classes': ('collapse',),  # Permet de réduire cette section dans l'admin
#         }),
#     )




from django.contrib import admin
from .models import Project, Task

class TaskInline(admin.TabularInline):
    model = Task
    extra = 1

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'creator', 'created_at')
    list_filter = ('created_at', 'creator')
    search_fields = ('title', 'description')
    date_hierarchy = 'created_at'
    inlines = [TaskInline]

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'project', 'status', 'created_at')
    list_filter = ('status', 'created_at', 'project')
    search_fields = ('title',)
    date_hierarchy = 'created_at'

    actions = ['mark_as_completed']

    @admin.action(description="Marquer les tâches sélectionnées comme terminées")
    def mark_as_completed(self, request, queryset):
        queryset.update(status='completed')