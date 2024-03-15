from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Pokemon
from .serializers import PokemonSerializer
from django.http import JsonResponse
from rest_framework.response import Response
import requests
import random

# Calls the PokeAPI. See DataFetch.js.
# Shows a random Pokemon each time it is called

def app(request):
    randomNum = random.randint(1, 151)
    url = 'https://pokeapi.co/api/v2/pokemon/{}/'
    newURL = url.format(randomNum)
    response = requests.get(newURL)
    data = response.json()
    return JsonResponse(data)

# Django API class

class PokemonListApiView(APIView):

# GET method used by GetPokemon.js
# Turns the querylist into an array so it can be listed on the front-end

    @api_view(['GET'])
    def getPokemon(request):
        pokemon = Pokemon.objects.all()
        serializer = PokemonSerializer(pokemon, many=True)
        pokeArray = Pokemon.objects.values_list('no', 'name')
        pokeArray = list(pokeArray)
        return Response(serializer.data)
    
# POST method used by DataFetch.js.
# This is called after app() as it posts the random pokemon into a database.
    
    @api_view(['POST'])
    def postPokemon(request):
        data = request.data
        serializer = PokemonSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
# DELETE method called by DeletePokeButton.js
# Deletes all posted pokemon in the database.
    
    @api_view(['DELETE'])
    def deletePokemon(request):
        Pokemon.objects.all().delete()
        return Response(print('Deleted all data'))
    
# Delete method called by DeleteOldest.js
# Once the database contains 6 pokemon. It will delete the oldest entry each time postPokemon() is called.
    
    @api_view(['DELETE'])
    def deleteOldest(request):
        print(len(Pokemon.objects.all()))
        print(Pokemon.objects.all().values())
        if len(Pokemon.objects.all()) >= 7:
            first = Pokemon.objects.order_by('id').first()
            first.delete()
            return Response(print('Deleted oldest entry'))
        return Response(print('Not enough Pokemon in database... yet.'))
