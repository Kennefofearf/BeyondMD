from rest_framework import serializers
from .models import Pokemon

# Serializes the Pokemon model

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ['name', 'no']