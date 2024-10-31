# 📝 Exercice2 - TDD ~ 20 minutes

Vous trouverez sur ce dossier une fonction `formatDate` ajoutée au fichier `utils.ts`.
Cette fonction n'a aucune logique pour le moment, seulement des commentaires. 

Le développeur a choisi de commencer par écrire les tests unitaires (TDD).
Ces tests unitaires basiques devraient vous permettre d'implémenter la logique interne de la fonction `formatDate`.

Un autre use case est à prévoir pour tester cette fonction. Nous aimerions renvoyer le format de date en fonction de la zone géographique.

## 🐾 Étapes

L'objectif dans un premier temps est de se conformer aux deux tests unitaires implémentés, pour cela il faut :

- Accepter le format Date en input dans la fonction `formatDate`
- Retouner la date au format string
- Retourner ce string avec ce format aaaa-mm-jj (yyyy-mm-dd)

Dans un second temps vous devrez améliorer la fonction formatDate afin qu'elle gère différentes zones géographiques :

- implémenter cette feature dans la fonction `formatDate`
- ajouter les tests unitaires pour vérifier que la fonction gère bien les différentes zones géographiques

Vous aurez terminés cette exercice lorsque :

- la logique interne de la fonction `formatDate` est implémentée (retourner le format de date demandée)
- les tests unitaires sont passés
- la logique interne de la fonction permet de gérer différentes zone géographiques
- les tests unitaires vérifient l'implémentation de la gestion de zones géographiques différentes

## 🚀 Comment exécuter les tests

Lancez la commande :

```bash
npm test
```

## ✅ Critères de validation
- Tous les tests unitaires écrits réussissent.
- Les cas de bord sont bien couverts pour un format de date locale et étranger.