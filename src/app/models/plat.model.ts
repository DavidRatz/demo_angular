export interface Plat{
    id: number,
    nom: string,
    type: 'plat' | 'entree' | 'dessert',
    prix: number
}