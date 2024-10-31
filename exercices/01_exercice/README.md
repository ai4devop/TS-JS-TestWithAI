# 📝 Exercice1 - Tests Unitaires ~ 20 minutes

Vous trouverez sur ce dossier deux fonctions importantes dans le fichier `utils.ts` :

- La fonction `reverseString` qui inverse une chaîne de caractères.
- La fonction `isPalindromeRecursive` vérifie de manière récursive si une chaîne de caractères est un palindrome, c'est-à-dire si elle se lit de la même façon à l'endroit et à l'envers.

L'objectif principal est de voir si votre assistant d'IA générative peut vous aider à écrire des tests unitaires complets dans le fichier `utils.test.ts` et si ces derniers fonctionnent correctement en lançant la commande :

```bash
npm test
```

## 🎯 Objectif

1. **Génération de tests** : Utilisez votre assistant IA pour proposer une suite de tests unitaires pour les fonctions `reverseString` et `isPalindromeRecursive`.

   - Pour `reverseString`, la fonction devrait inverser des chaînes normalement.
    - Pour `isPalindromeRecursive`, la fonction devrait vérifier si une chaîne est un palindrome. Testez-la avec :
        - Des palindromes simples (ex: "racecar", "radar").
        - Des chaînes qui ne sont pas des palindromes (ex: "hello", "world").
        - Des chaînes vides ou avec un seul caractère.
        - Des chaînes avec des espaces ou des caractères spéciaux (pensez à des phrases comme "A man, a plan, a canal, Panama").
        - Gérez les cas où l'entrée est `null` ou `undefined` en vérifiant que la fonction lève bien une erreur.

2. **Revue et Ajustement** :

   - Analysez les tests générés pour vous assurer de leur pertinence et de leur complétude.
   - Ajustez manuellement les tests si nécessaire pour couvrir des cas particuliers :
        - `reverseString` : caractères spéciaux, string vide, espaces, gestion de null ou undefined
        - `isPalindromeRecursive` : chaînes de caractères simples, palindromes de différentes longueurs, non-palindromes, gestion de null ou undefined

3. **Exécution et Validation** :

   - Exécutez `npm test` pour vérifier que tous les tests passent avec succès.
   - En cas d'erreurs, diagnostiquez le problème pour savoir si l'erreur provient d'une logique incorrecte dans la fonction ou d'une défaillance dans le test lui-même.


### Tips

Utilisez la commande `@Terminal` via Continue lorsque vous rencontrez des erreurs dans l'exécution des tests.

---

## 🚀 Comment exécuter les tests

Lancez la commande :

```bash
npm test
```

## ✅ Critères de validation
- Tous les tests unitaires écrits réussissent.
- Les cas de bord (par exemple, une chaîne null, une chaîne vide, etc.) sont bien couverts.