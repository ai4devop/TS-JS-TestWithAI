# 💡 Exercice 1- Tests Unitaires

## 🎯 Objectifs

Cette solution implémente la gestion de plusieurs cas pouvant être des effets de bords ou tout simplement une vérification de la logique interne de la fonction :

- `reverses a string correctly` > logique interne
- `returns an empty string if the input is an empty string` > logique interne
- `should reverse a string with one character` > logique interne
- `should reverse a string with spaces` > logique interne
- `should reverse a string with special characters` > logique interne
- `throws error if input is null` > effet de bord
- `throws error if input is undefined` > effet de bord

Les deux derniers tests nous ont amenés à améliorer notre fonction en y ajoutant un check sur les valeurs `null` et `undefined`.

### Ajout de la fonction `isPalindromeRecursive`

La fonction `isPalindromeRecursive` vérifie de manière récursive si une chaîne de caractères est un palindrome, c'est-à-dire si elle se lit de la même façon à l'endroit et à l'envers. La fonction utilise `reverseString` pour inverser certaines sous-chaînes pendant le processus de vérification. Elle gère plusieurs cas :

- Chaînes simples palindromes (ex : "racecar", "radar")
- Chaînes qui ne sont pas des palindromes (ex : "hello", "world")
- Chaînes vides ou avec un seul caractère
- Cas où l'entrée est `null` ou `undefined` (lève une erreur)

Voici quelques tests unitaires qui valident le comportement de `isPalindromeRecursive` :

- `returns true for a single character` > palindrome simple
- `returns true for an empty string` > palindrome vide
- `returns true for a simple palindrome` > palindrome classique
- `returns false for a non-palindrome` > non-palindrome
- `returns false for a palindrome with special characters` > gestion des caractères spéciaux non gérée
- `returns true for a palindrome without special characters` > gestion de palindrome sans caractères spéciaux
- `throws error if input is null` > effet de bord
- `throws error if input is undefined` > effet de bord

### 🚀 Comment exécuter les tests
Lancez la commande :

```bash
npm test
```

### Bonus - Amélioration pour les caractères spéciaux

Actuellement, la fonction `isPalindromeRecursive` ne gère pas les espaces, les virgules ou autres caractères spéciaux. Si vous souhaitez aller plus loin et optimiser la fonction pour qu'elle puisse gérer des phrases comme "A man, a plan, a canal, Panama", vous pouvez essayer d'ignorer ces caractères lors de la vérification du palindrome.
