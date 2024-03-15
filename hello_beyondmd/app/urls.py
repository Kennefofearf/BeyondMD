from django.urls import path
from .views import PokemonListApiView
from app import urls as pokemon_urls
from . import views

# Create the URL paths that call different functions in the API

urlpatterns = [
    path('app/', views.app, name='app'),
    path('getPokemon/', views.PokemonListApiView.getPokemon, name='getPokemon'),
    path('postPokemon/', views.PokemonListApiView.postPokemon, name='postPokemon'),
    path('deletePokemon/', views.PokemonListApiView.deletePokemon, name='deletePokemon'),
    path('deleteOldest/', views.PokemonListApiView.deleteOldest, name='deleteOldest')
]