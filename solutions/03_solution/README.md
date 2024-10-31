# 💡 Exercice 3 - TU + Mocking

Ce dossier présente une solution pour l'Exercice 3 qui consiste à gérer les erreurs dans une fonction de récupération de données `fetchData` et à écrire ses tests unitaires en simulant des appels API. 

## 🎯 Description de la Solution

### Modifications Apportées à `utils.ts`

1. **Gestion d'Erreur** :
   - La fonction `fetchData` a été modifiée pour inclure la gestion des erreurs.
   - L'utilisation de `try/catch` permet de capturer et de gérer les erreurs liées aux réponses d'API et aux problèmes de réseau.
   - Les erreurs sont classifiées et traitées en fonction de leur `mockStatusCode` pour une gestion appropriée.

### Modifications Apportées à `utils.test.ts`

2. **Tests Unitaires** :
   - Utilisation de `jest.fn()` pour simuler les appels API et tester différents scénarios.
   - Les tests couvrent :
     - La réussite de la récupération des données.
     - L'échec dû à une erreur de réseau.
     - L'échec dû à une erreur de réponse API.

## 💡 Conseils Techniques

- **Mocking** : Pour tester les fonctions asynchrones comme `fetchData`, nous avons utilisé les capacités de mocking de Jest via `jest.fn()`. Cela nous permet d'isoler la fonction et de l'appeler avec des arguments spécifiques pour simuler différents scénarios.

- **Gestion d'Erreur** : Toujours séparer les types d'erreurs (par exemple, erreur réseau vs erreur API) pour un traitement plus granulaire et une meilleure compréhension des échecs potentiels.

## ✅ Conclusion

Cette implémentation illustre comment gérer les erreurs de manière robuste dans un environnement asynchrone et comment écrire des tests unitaires efficaces en utilisant le mocking.