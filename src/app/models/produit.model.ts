export interface Produit{
    marque: string;
    modele: string;
    stock: number;
    prix: number;
    en_vente: boolean;
    quantite?: number;
}