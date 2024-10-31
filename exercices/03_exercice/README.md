# 📝 Exercice 3 - TU + Mocking ~ 20 minutes

Vous trouverez sur ce dossier une fonction `fetchData` qui simule la récupération de données depuis une API. Il manque la gestion d'erreur dans cette fonction et ses tests unitaires.

Cette exercice a pour but d'introduire l'activité de mock dans vos pratiques de test et de challenger votre IA générative sur ce sujet. 

## 🎯 Objectifs

### 1. Ajoutez une gestion d'erreur à `utils.ts`

- Modifiez la fonction `fetchData` pour qu'elle gère quelques erreurs de réponse de API ainsi que de réseau.
- Utilisez `try/catch` pour capturer les erreurs et les gérer de manière appropriée avec leurs statuts.

### 2. Ajoutez les tests unitaires `utils.test.ts`

- Ajoutez des tests unitaires pour la fonction `fetchData` dans le fichier `utils.test.ts`.
- Utilisez un mock pour simuler un appel API dans vos tests
- Assurez-vous de couvrir différents cas de test, y compris les cas où la fonction réussit à récupérer les données, les cas où elle échoue en raison d'une erreur de réseau et les cas où elle échoue en raison d'une erreur de réponse de l'API.

### 🚀 Comment exécuter les tests
Lancez la commande :

```bash
npm test
```

## ✅ Critères de validation :

- Les tests unitaires rédigés passent avec succès.
- Les tests couvrent les différents statuts renvoyés par une API avec la gestion d'erreur.

**<u>Tips</u>** : 

- Pour mocker une fonction, vous pouvez utiliser `jest.fn()` ou `jest.mock()` pour créer un mock de la fonction:

```bash
jest.mock("./utils", () => ({
  fetchData: jest.fn(),
}));

```
