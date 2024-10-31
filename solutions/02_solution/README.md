# 💡 Exercice 2 - TDD

## 🎯 Description de la Solution

Dans ce dossier solution vous y trouverez une version complète et fonctionnelle de la fonction `formatDate` dans le fichier `utils.ts`. Cette fonction a été développée en suivant les principes du développement piloté par les tests (TDD).

## 📝 Fonctionnalités Implémentées

### Format de Date basique

1. **Entrée de la Fonction**: La fonction `formatDate` accepte un objet de type `Date` en entrée.
2. **Sortie de la Fonction**: La fonction retourne une chaîne de caractères représentant la date dans le format `aaaa-mm-jj` (aaaa-mm-jj).

### Prise en Charge des Zones Géographiques

En plus du format de date de base, la fonction a été améliorée pour gérer les différentes zones géographiques. Cela permet de retourner le format de date qui correspond à une région spécifique.

## Tests Unitaires

Des tests unitaires ont été développés et incluent les scénarios suivants :

1. Vérification que la fonction retourne correctement le format de base `aaaa-mm-jj`.
2. Validation de la prise en charge des différents formats en fonction des zones géographiques spécifiées.

## Instructions pour Justification Technique

1. **Vérifier la Fonctionnalité de Base** : La logique interne de la fonction devrait satisfaire les tests unitaires de base. Assurez-vous que la date est correctement convertie en chaîne de caractères au format `aaaa-mm-jj`. Le code correspondant:

```bash
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
```

2. **Gérer les Zones Géographiques** : La fonction devrait maintenant être capable de retourner la date formatée selon la zone géographique demandée grâce à l'ajout du nouvel argument `locale: string`. Par soucis de simplicité nous avons choisis de vérifier le cas de la zone géographique France avec cette condition :

```bash
if (locale === "fr-FR") {
    return `${day}/${month}/${year}`;
}
```

Les tests unitaires vérifiant cette logique sont les suivants `formats date correctly as YYYY-MM-DD for en-US locale` et `formats date correctly as DD/MM/YYYY for fr-FR locale`

3. **Effets de bord** : Nous nous sommes permis d'ajouter le check suivant dans utils.ts :

```bash
if (!date) {
    throw new Error("Date cannot be null");
}
```

Cela permet de vérifier que la date en entrée n'est pas null. Si c'est le cas, une erreur est levée.

Le test correspondant est ajouté dans le fichier `utils.test.ts` et se nomme `throws error if date is null`
